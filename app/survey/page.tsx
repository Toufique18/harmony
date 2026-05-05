"use client";

import { useState } from "react";

const questions = [
  {
    category: "Brand Clarity & Promise",
    text: "On A Scale Of 1–5, How Clearly Is Your Brand Promise Defined Internally?",
    type: "scale",
    options: [
      "1. Not defined at all",
      "2. Loosely defined and rarely referenced",
      "3. Partially defined, applied in some areas",
      "4. Mostly clear and referenced regularly",
      "5. Crystal clear, documented and fully embedded"
    ]
  },
  {
    category: "Brand Clarity & Promise",
    text: "Can most employees confidently explain what makes your brand different?",
    type: "yesno",
    options: ["Yes", "No"]
  },
  {
    category: "Customer Journey Consistency",
    text: "How consistent is your customer experience across touchpoints?",
    type: "scale",
    options: [
      "1. Very inconsistent",
      "2. Mostly inconsistent",
      "3. Somewhat consistent",
      "4. Mostly consistent",
      "5. Highly consistent across all touchpoints"
    ]
  },
  {
    category: "Customer Journey Consistency",
    text: "Do customers receive the same quality of service regardless of channel?",
    type: "yesno",
    options: ["Yes", "No"]
  },
  {
    category: "Employee & Brand Engagement",
    text: "How well do employees understand your brand values?",
    type: "scale",
    options: [
      "1. Do not understand at all",
      "2. Vague understanding",
      "3. Basic understanding",
      "4. Good understanding",
      "5. Deeply understand and embody values"
    ]
  },
  {
    category: "Employee & Brand Engagement",
    text: "Do employees feel empowered to deliver great experiences?",
    type: "scale",
    options: [
      "1. Not empowered at all",
      "2. Rarely empowered",
      "3. Sometimes empowered",
      "4. Mostly empowered",
      "5. Highly empowered and encouraged"
    ]
  },
  {
    category: "Internal Process Alignment",
    text: "How well do internal processes support your customer experience?",
    type: "scale",
    options: [
      "1. Processes hinder experience",
      "2. Processes often create friction",
      "3. Processes are neutral",
      "4. Processes generally support experience",
      "5. Processes are fully optimized for experience"
    ]
  },
  {
    category: "Internal Process Alignment",
    text: "Are there frequent breakdowns between departments?",
    type: "yesno",
    options: ["Yes", "No"]
  }
];

export default function SurveyPage() {
  const [step, setStep] = useState("details"); // "details" | "questions"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const [selectedGoal, setSelectedGoal] = useState("Improve customer experience");

  const goals = [
    "Improve customer experience",
    "Fix operational inefficiencies",
    "Align team with brand",
    "Understand performance gaps",
    "Other",
  ];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Reached the end, submit logic could go here
      alert("Survey completed!");
    }
  };

  const handleOptionSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
  };

  if (step === "questions") {
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const currentAnswer = answers[currentQuestionIndex];

    return (
      <div className="w-full max-w-[800px] px-4 md:px-8 mx-auto font-sans mt-4 md:mt-8">
        {/* Progress */}
        <div className="flex gap-2 mb-8">
          <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
          <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
          <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
          <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-[42px] text-[#252525] mb-5 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
          <span className="font-medium">Answer The </span>
          <span className="italic text-[#4A6B9C] font-medium">Questions</span>
        </h1>
        <p className="text-[#6B7280] text-[15px] leading-relaxed mb-10 max-w-[95%]">
          Two targeted questions per dimension. Mix of 1–5 scales and Yes/No — each designed to surface the truth quickly.
        </p>

        {/* Form Container */}
        <div className="relative w-full rounded-md bg-[#F9FAFB] p-6 md:p-8 pt-8 mt-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-md bg-gradient-to-r from-[#D95D56] via-[#4A6B9C] to-[#E3A857]"></div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[14px] text-gray-500 font-medium">{currentQuestion.category}</span>
              <span className="text-[14px] text-gray-500 font-medium">Question {currentQuestionIndex + 1} of 8</span>
            </div>
            
            {/* Inner Progress Bar */}
            <div className="w-full h-1.5 bg-white rounded-full mb-8 overflow-hidden shadow-inner border border-gray-100">
              <div 
                className="h-full bg-[#F09425] rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-[20px] md:text-[22px] font-bold text-[#252525] mb-6 leading-snug">
              {currentQuestion.text}
            </h2>

            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = currentAnswer === option;
                return (
                  <label 
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-md border border-gray-200 bg-white cursor-pointer hover:border-[#F09425] transition-colors shadow-sm"
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="text-[15px] text-[#374151]">{option}</span>
                    <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-colors ${isSelected ? 'bg-[#F09425]' : 'border border-gray-300 bg-white'}`}>
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleNext}
          disabled={!currentAnswer}
          className="w-full mt-6 mb-20 py-4 rounded-lg bg-[#F09425] text-white font-medium text-[16px] hover:bg-[#e08820] disabled:bg-[#fbdca8] disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          {isLastQuestion ? "Submit" : "Next"} 
          {!isLastQuestion && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] px-4 md:px-8 mx-auto font-sans mt-4 md:mt-8">
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        <div className="h-1.5 w-10 md:w-12 bg-[#4A6B9C] rounded-full"></div>
        <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
        <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
        <div className="h-1.5 w-10 md:w-12 bg-[#E5E7EB] rounded-full"></div>
      </div>

      {/* Header */}
      <h1 className="text-4xl md:text-[42px] text-[#252525] mb-5 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
        <span className="font-medium">Tell Us About </span>
        <span className="italic text-[#4A6B9C] font-medium">Yourself.</span>
      </h1>
      <p className="text-[#6B7280] text-[15px] leading-relaxed mb-10 max-w-[95%]">
        Your report is personalised with your details — creating output that speaks directly to your role and business situation.
      </p>

      {/* Form Container */}
      <div className="relative w-full rounded-md bg-[#F9FAFB] p-6 md:p-8 pt-8 md:pt-10 mt-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-md bg-gradient-to-r from-[#D95D56] via-[#4A6B9C] to-[#E3A857]"></div>

        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setStep("questions"); }}>
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#374151]">First Name</label>
              <input 
                type="text" 
                placeholder="e.g. Sarah Mitchell" 
                required
                className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px]" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#374151]">Last Name</label>
              <input 
                type="text" 
                placeholder="e.g. Sarah Mitchell" 
                required
                className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px]" 
              />
            </div>
          </div>

          {/* Work Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">Work Email</label>
            <input 
              type="email" 
              placeholder="e.g. sarah@company.com" 
              required
              className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px]" 
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">Company Name</label>
            <input 
              type="text" 
              placeholder="e.g. Meridian Advisory Group" 
              required
              className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px]" 
            />
          </div>

          {/* Role / Position */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">Role / Position</label>
            <input 
              type="text" 
              placeholder="e.g. CEO, Operations Director" 
              required
              className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] text-[15px]" 
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-[#374151]">Industry</label>
            <div className="relative">
              <select 
                defaultValue=""
                required
                className="w-full px-4 py-3.5 rounded-md border border-gray-200 bg-white text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A6B9C] appearance-none text-[15px] cursor-pointer"
              >
                <option value="" disabled>Select your industry</option>
                <option value="tech" className="text-gray-900">Technology</option>
                <option value="finance" className="text-gray-900">Finance</option>
                <option value="healthcare" className="text-gray-900">Healthcare</option>
                <option value="other" className="text-gray-900">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="flex flex-col gap-3 mt-4">
            <label className="text-[15px] font-bold text-[#374151] mb-1">What's your main goal for this assessment?</label>
            
            {goals.map((goal) => {
              const isSelected = selectedGoal === goal;
              return (
                <label 
                  key={goal}
                  className="flex items-center justify-between p-4 rounded-md border border-gray-200 bg-white cursor-pointer hover:border-[#F09425] transition-colors"
                  onClick={() => setSelectedGoal(goal)}
                >
                  <span className="text-[15px] text-[#374151]">{goal}</span>
                  <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-colors ${isSelected ? 'bg-[#F09425]' : 'border border-gray-300 bg-white'}`}>
                    {isSelected && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
          
          <button type="submit" className="w-full mt-6 py-4 rounded-lg bg-[#F09425] text-white font-medium text-[16px] hover:bg-[#e08820] transition-colors flex items-center justify-center gap-2 shadow-sm">
            Continue Begin Diagnostic 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </form>
      </div>
      
      {/* spacer to accommodate the button inside form now */}
      <div className="h-20"></div>
    </div>
  );
}
