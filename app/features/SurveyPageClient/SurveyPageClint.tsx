/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  role: string;
  industry: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type QuestionOption = {
  id?: string;
  label?: string;
  title?: string;
  text?: string;
  value?: string;
  score?: number;
};

type BackendQuestion = {
  id: string;
  dimensionId: string;
  title: string;
  text?: string;
  type: string;
  options: QuestionOption[] | string[];
};

type BackendDimension = {
  id: string;
  title: string;
  key: string;
  order: number;
  description?: string | null;
  questions: BackendQuestion[];
};

type FlatQuestion = BackendQuestion & {
  category: string;
  dimensionTitle: string;
};

type AnswerData = {
  questionId: string;
  answer: string;
  selectedValue: string | number;
  optionId?: string;
  score?: number;
};

type Step = "details" | "questions";

export default function SurveyPageClient({
  questions,
}: {
  questions: BackendDimension[];
}) {
  const router = useRouter();

  const [step, setStep] = useState<Step>("details");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<string, AnswerData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswerSubmitting, setIsAnswerSubmitting] = useState(false);

  const [assessmentId, setAssessmentId] = useState<string>("");

  const [selectedGoal, setSelectedGoal] = useState(
    "Improve customer experience"
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    role: "",
    industry: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const goals = [
    "Improve customer experience",
    "Fix operational inefficiencies",
    "Align team with brand",
    "Understand performance gaps",
    "Other",
  ];

  const flatQuestions = useMemo<FlatQuestion[]>(() => {
    if (!Array.isArray(questions)) return [];

    return questions
      .slice()
      .sort((a, b) => a.order - b.order)
      .flatMap((dimension) =>
        dimension.questions.map((question) => ({
          ...question,
          id: question.id || (question as any)._id,
          category: dimension.title,
          dimensionTitle: dimension.title,
        }))
      );
  }, [questions]);

  useEffect(() => {
    const savedAssessmentId = localStorage.getItem("assessmentId");
    const savedStep = localStorage.getItem("assessmentStep") as Step | null;
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    const savedAnswers = localStorage.getItem("assessmentAnswers");
    const savedFormData = localStorage.getItem("assessmentFormData");
    const savedGoal = localStorage.getItem("assessmentGoal");

    if (savedAssessmentId) {
      setAssessmentId(savedAssessmentId as string);
    }

    if (savedStep === "questions" && savedAssessmentId) {
      setStep("questions");
    }

    if (savedIndex) {
      const parsedIndex = Number(savedIndex);

      if (!Number.isNaN(parsedIndex) && parsedIndex >= 0) {
        setCurrentQuestionIndex(parsedIndex);
      }
    }

    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (error) {
        console.error("Failed to parse saved answers:", error);
      }
    }

    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
      }
    }

    if (savedGoal) {
      setSelectedGoal(savedGoal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("assessmentStep", step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", String(currentQuestionIndex));
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem("assessmentAnswers", JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem("assessmentFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("assessmentGoal", selectedGoal);
  }, [selectedGoal]);

  const clearAssessmentLocalStorage = () => {
    localStorage.removeItem("assessmentId");
    localStorage.removeItem("assessmentStep");
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("assessmentAnswers");
    localStorage.removeItem("assessmentFormData");
    localStorage.removeItem("assessmentGoal");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role / Position is required";
    }

    if (!formData.industry) {
      newErrors.industry = "Industry is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/assessments/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            assessmentGoal: selectedGoal,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to start assessment");
      }

      const newAssessmentId = data?.data?.assessment?.id;

      if (!newAssessmentId) {
        throw new Error("Assessment ID not found");
      }

      localStorage.setItem("assessmentId", newAssessmentId);
      localStorage.setItem("assessmentStep", "questions");
      localStorage.setItem("currentQuestionIndex", "0");
      localStorage.setItem("assessmentFormData", JSON.stringify(formData));
      localStorage.setItem("assessmentGoal", selectedGoal);

      setAssessmentId(newAssessmentId);
      setStep("questions");
      setCurrentQuestionIndex(0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getOptionLabel = (option: QuestionOption | string) => {
    if (typeof option === "string") return option;

    return option.label || option.title || option.text || option.value || "";
  };

  const getOptionId = (option: QuestionOption | string) => {
    if (typeof option === "string") return option;

    return option.id || option.value || option.label || option.title || "";
  };

  const getOptionScore = (option: QuestionOption | string) => {
    if (typeof option === "string") return undefined;

    return option.score;
  };

  const getSelectedValue = (option: QuestionOption | string) => {
    const label = getOptionLabel(option).trim();

    if (typeof option !== "string") {
      if (option.value) {
        const valueLower = option.value.toLowerCase();

        if (valueLower === "yes") return "yes";
        if (valueLower === "no") return "no";

        const numericValue = Number(option.value);

        if (!Number.isNaN(numericValue)) {
          return numericValue;
        }

        return option.value;
      }

      if (typeof option.score === "number") {
        return option.score;
      }
    }

    const lowerLabel = label.toLowerCase();

    if (lowerLabel === "yes") return "yes";
    if (lowerLabel === "no") return "no";

    const numberMatch = label.match(/^[1-5]/);

    if (numberMatch) {
      return Number(numberMatch[0]);
    }

    return label;
  };

  const handleOptionSelect = (
    questionId: string,
    option: QuestionOption | string
  ) => {
    const answerData: AnswerData = {
      questionId,
      optionId: typeof option === "string" ? undefined : option.id,
      answer: getOptionLabel(option),
      selectedValue: getSelectedValue(option),
      score: getOptionScore(option),
    };

    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerData,
    }));
  };

  const submitCurrentAnswer = async () => {
    const currentQuestion = flatQuestions[currentQuestionIndex];

    if (!currentQuestion) return false;

    const currentAnswer = answers[currentQuestion.id];

    if (!currentAnswer) return false;

    const storedAssessmentId =
      assessmentId || localStorage.getItem("assessmentId") || "";

    if (!storedAssessmentId) {
      console.error("Assessment ID not found");
      return false;
    }

    try {
      setIsAnswerSubmitting(true);

      const payload = {
        questionId: currentAnswer.questionId,
        selectedValue: currentAnswer?.selectedValue?.toString(),
      };

      console.log("Answer Payload:", payload);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/assessments/${storedAssessmentId}/answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok || data?.success === false) {
        throw new Error(data?.message || "Failed to submit answer");
      }

      return true;
    } catch (error) {
      console.error("Submit answer error:", error);
      return false;
    } finally {
      setIsAnswerSubmitting(false);
    }
  };

  const completeAssessment = async () => {
    const storedAssessmentId =
      assessmentId || localStorage.getItem("assessmentId") || "";

    if (!storedAssessmentId) {
      console.error("Assessment ID not found");
      return false;
    }

    try {
      setIsLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/assessments/${storedAssessmentId}/complete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sendEmail: true,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok || data?.success === false) {
        throw new Error(data?.message || "Failed to complete assessment");
      }

      return true;
    } catch (error) {
      console.error("Complete assessment error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const handleNext = async () => {
    const currentQuestion = flatQuestions[currentQuestionIndex];

    if (!currentQuestion) return;

    const currentAnswer = answers[currentQuestion.id];

    if (!currentAnswer) return;

    const submitted = await submitCurrentAnswer();

    if (!submitted) return;

    if (currentQuestionIndex < flatQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }

    const completed = await completeAssessment();

    if (!completed) return;

    const storedAssessmentId =
      assessmentId || localStorage.getItem("assessmentId") || "";

    clearAssessmentLocalStorage();

    router.push(`/result/${storedAssessmentId}`);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  if (step === "questions") {
    if (!flatQuestions.length) {
      return (
        <div className="w-full max-w-[800px] px-4 md:px-8 mx-auto font-sans mt-10">
          <p className="text-red-500">No questions found.</p>
        </div>
      );
    }

    const currentQuestion = flatQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === flatQuestions.length - 1;
    const currentAnswer = answers[currentQuestion.id];

    return (
      <div className="w-full max-w-[800px] px-4 md:px-8 mx-auto font-sans mt-4 md:mt-8">
        {isLoading && (
          <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center p-6">
            <div className="max-w-[800px] w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
              <div className="flex flex-col">
                <div className="flex gap-2 mb-8">
                  <div className="h-1.5 w-12 bg-[#4A6B9C] rounded-full"></div>
                  <div className="h-1.5 w-12 bg-[#4A6B9C] rounded-full"></div>
                  <div className="h-1.5 w-12 bg-[#4A6B9C] rounded-full"></div>
                </div>

                <h1
                  className="text-3xl md:text-[42px] text-[#252525] mb-5 leading-tight font-medium"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  Analyzing Your Alignment{" "}
                  <span className="italic text-[#4A6B9C]">
                    Architecture ...
                  </span>
                </h1>

                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-[600px]">
                  Precision takes a moment. Your roadmap to a high-performance,
                  congruent brand is almost ready.
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-gray-100 border-t-[#F09425] rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2 mb-8">
          <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
          <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
          <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
        </div>

        <h1
          className="text-4xl md:text-[42px] text-[#252525] mb-5 tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          <span className="font-medium">Answer The </span>
          <span className="italic text-[#4A6B9C] font-medium">Questions</span>
        </h1>

        <p className="text-[#6B7280] text-[15px] leading-relaxed mb-10 max-w-[95%]">
          Two targeted questions per dimension. Mix of 1–5 scales and Yes/No —
          each designed to surface the truth quickly.
        </p>

        <div className="relative w-full rounded-md bg-[#F9FAFB] p-6 md:p-8 pt-8 mt-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-md bg-gradient-to-r from-[#D95D56] via-[#4A6B9C] to-[#E3A857]"></div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[14px] text-gray-500 font-medium">
                {currentQuestion.category}
              </span>

              <span className="text-[14px] text-gray-500 font-medium">
                Question {currentQuestionIndex + 1} of {flatQuestions.length}
              </span>
            </div>

            <div className="w-full h-1.5 bg-white rounded-full mb-8 overflow-hidden shadow-inner border border-gray-100">
              <div
                className="h-full bg-[#F09425] rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / flatQuestions.length) * 100
                    }%`,
                }}
              ></div>
            </div>

            <h2 className="text-[20px] md:text-[22px] font-bold text-[#252525] mb-6 leading-snug">
              {currentQuestion.title || currentQuestion.text}
            </h2>

            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option, idx) => {
                const optionLabel = getOptionLabel(option);
                const optionId = getOptionId(option);

                const isSelected =
                  currentAnswer?.answer === optionLabel ||
                  currentAnswer?.optionId === optionId;

                return (
                  <label
                    key={optionId || idx}
                    className="flex items-center justify-between p-4 rounded-md border border-gray-200 bg-white cursor-pointer hover:border-[#F09425] transition-colors shadow-sm"
                    onClick={() =>
                      handleOptionSelect(currentQuestion.id, option)
                    }
                  >
                    <span className="text-[15px] text-[#374151]">
                      {optionLabel}
                    </span>

                    <div
                      className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-colors ${isSelected
                        ? "bg-[#F09425]"
                        : "border border-gray-300 bg-white"
                        }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 mb-20">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handleBack}
              type="button"
              disabled={isAnswerSubmitting || isLoading}
              className="flex-1 py-4 rounded-lg bg-[#E0E0E0] border-none text-black font-medium text-[16px] hover:bg-[#F09425] hover:text-[#FFFFFF] transition-colors flex items-center justify-center gap-2 shadow-sm order-2 md:order-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
              Previous
            </button>
          )}

          <button
            onClick={handleNext}
            type="button"
            disabled={!currentAnswer || isAnswerSubmitting || isLoading}
            className={`${currentQuestionIndex === 0 ? "w-full" : "flex-1"
              } py-4 rounded-lg bg-[#F09425] text-white font-medium text-[16px] hover:bg-[#e08820] cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-sm order-1 md:order-2 disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {isLoading
              ? "Generating Report..."
              : isAnswerSubmitting
                ? "Submitting..."
                : isLastQuestion
                  ? "Continue to report"
                  : "Next"}

            {!isLastQuestion && !isAnswerSubmitting && !isLoading && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] px-4 md:px-8 mx-auto font-sans mt-4 md:mt-8">
      <div className="flex gap-2 mb-8">
        <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
        <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
        <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
      </div>

      <h1
        className="text-4xl md:text-[42px] text-[#252525] mb-5 tracking-tight leading-tight"
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        <span className="font-medium">Tell Us About </span>
        <span className="italic text-[#4A6B9C] font-medium">Yourself.</span>
      </h1>

      <p className="text-[#6B7280] text-[15px] leading-relaxed mb-10 max-w-[95%]">
        Your report is personalised with your details — creating output that
        speaks directly to your role and business situation.
      </p>

      <div className="relative w-full rounded-md bg-[#F9FAFB] p-6 md:p-8 pt-8 md:pt-10 mt-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-md bg-gradient-to-r from-[#D95D56] via-[#4A6B9C] to-[#E3A857]"></div>

        <form className="flex flex-col gap-6" onSubmit={handleDetailsSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#374151]">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="e.g. Sarah"
                className={`w-full px-4 py-3.5 rounded-md border bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px] text-black font-medium ${errors.firstName ? "border-red-500" : "border-gray-200"
                  }`}
              />

              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#374151]">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="e.g. Mitchell"
                className={`w-full px-4 py-3.5 rounded-md border bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px] text-black font-medium ${errors.lastName ? "border-red-500" : "border-gray-200"
                  }`}
              />

              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">
              Work Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. sarah@company.com"
              className={`w-full px-4 py-3.5 rounded-md border bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px] text-black font-medium ${errors.email ? "border-red-500" : "border-gray-200"
                }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Meridian Advisory Group"
              className={`w-full px-4 py-3.5 rounded-md border bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px] text-black font-medium ${errors.companyName ? "border-red-500" : "border-gray-200"
                }`}
            />

            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">
              Role / Position
            </label>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="e.g. CEO, Operations Director"
              className={`w-full px-4 py-3.5 rounded-md border bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px] text-black font-medium ${errors.role ? "border-red-500" : "border-gray-200"
                }`}
            />

            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">
              Industry
            </label>

            <div className="relative">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className={`w-full px-4 py-3.5 rounded-md border bg-white text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] appearance-none text-[15px] cursor-pointer ${errors.industry ? "border-red-500" : "border-gray-200"
                  }`}
              >
                <option value="" disabled>
                  Select your industry
                </option>
                <option value="Technology" className="text-gray-900">
                  Technology
                </option>
                <option value="Finance" className="text-gray-900">
                  Finance
                </option>
                <option value="Healthcare" className="text-gray-900">
                  Healthcare
                </option>
                <option value="Professional Services" className="text-gray-900">
                  Professional Services
                </option>
                <option value="Retail" className="text-gray-900">
                  Retail
                </option>
                <option value="Education" className="text-gray-900">
                  Education
                </option>
                <option value="Other" className="text-gray-900">
                  Other
                </option>
              </select>

              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            {errors.industry && (
              <p className="text-red-500 text-sm">{errors.industry}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <label className="text-[15px] font-bold text-[#374151] mb-1">
              What's your main goal for this assessment?
            </label>

            {goals.map((goal) => {
              const isSelected = selectedGoal === goal;

              return (
                <label
                  key={goal}
                  className="flex items-center justify-between p-4 rounded-md border border-gray-200 bg-white cursor-pointer hover:border-[#F09425] transition-colors"
                  onClick={() => setSelectedGoal(goal)}
                >
                  <span className="text-[15px] text-[#374151]">{goal}</span>

                  <div
                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-colors ${isSelected
                      ? "bg-[#F09425]"
                      : "border border-gray-300 bg-white"
                      }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </div>
                </label>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 py-4 rounded-lg bg-[#F09425] text-white font-medium text-[16px] hover:bg-[#e08820] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Starting..." : "Continue Begin Diagnostic"}

            {!isLoading && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            )}
          </button>
        </form>
      </div>

      <div className="h-20"></div>
    </div>
  );
}