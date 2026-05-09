/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function ResultPageClient({ results }: any) {
  const lead = results?.lead || {};
  const result = results?.result || {};
  const band = result?.band || {};
  const dimensionScores = result?.dimensionScores || [];

  const normalizedScore = result?.normalizedScore || 0;
  const finalPercentage = result?.finalPercentage || 0;

  const fullName = `${lead?.firstName || ""} ${lead?.lastName || ""}`.trim();
  console.log(result);
  const date = new Date(
    results?.completedAt ||
    result?.createdAt ||
    results?.createdAt ||
    new Date(),
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // lowest = red, 2nd = yellow, 3rd = blue, highest = green
  const rankColors = ["#E64437", "#FA981B", "#4978BC", "#10B981"];

  const rankedScores = [...dimensionScores]
    .map((score: any, index: number) => ({
      ...score,
      originalIndex: index,
    }))
    .sort((a: any, b: any) => {
      if (a.percentage === b.percentage) {
        return a.originalIndex - b.originalIndex;
      }

      return a.percentage - b.percentage;
    });

  const colorMap: Record<number, string> = {};

  rankedScores.forEach((item: any, rank: number) => {
    colorMap[item.originalIndex] = rankColors[rank] || "#4978BC";
  });

  const strongest = [...dimensionScores].sort(
    (a: any, b: any) => b.percentage - a.percentage,
  )[0];

  const weakest = [...dimensionScores].sort(
    (a: any, b: any) => a.percentage - b.percentage,
  )[0];

  const getDimensionScoreOutOf20 = (percentage: number) => {
    return Math.round((percentage / 100) * 20);
  };

  const strongestScore20 = strongest
    ? getDimensionScoreOutOf20(strongest.percentage)
    : 0;

  const weakestScore20 = weakest
    ? getDimensionScoreOutOf20(weakest.percentage)
    : 0;

  const pointSpread = strongestScore20 - weakestScore20;

  const aboveAverage = dimensionScores.filter(
    (item: any) => item.percentage >= 60,
  ).length;

  const getDimensionInsight = (score20: number) => {
    if (score20 >= 16) {
      return "This dimension shows strong alignment and reliable execution across the organization.";
    }

    if (score20 >= 12) {
      return "This dimension has a developing foundation, but consistency still needs improvement.";
    }

    if (score20 >= 8) {
      return "This dimension shows visible alignment gaps that may affect customer and employee experience.";
    }

    return "This dimension is currently a critical alignment risk and should be improved first.";
  };

  const getDimensionNextStep = (score20: number) => {
    if (score20 >= 16) {
      return "Maintain consistency and use this area as a model for other dimensions.";
    }

    if (score20 >= 12) {
      return "Strengthen processes, ownership, and communication to improve consistency.";
    }

    if (score20 >= 8) {
      return "Create clearer standards and reinforce expectations across teams.";
    }

    return "Prioritize this area immediately and remove the main blockers affecting execution.";
  };

  return (
    <div className="w-full bg-white overflow-hidden font-sans">
      {/* Header Section */}
      <div className="bg-[#1C1C1C] text-white p-8 md:p-12 relative overflow-hidden">
        {/* Dotted Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-12">
          <div>
            <h1 className="text-2xl md:text-[48px] font-bold leading-tight font-serif">
              Brand & Culture <br className="hidden lg:block" />
              Alignment <span className="italic opacity-40">Snapshot</span>
            </h1>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <div className="text-3xl md:text-6xl font-bold">
              {normalizedScore}
              <span className="text-lg md:text-3xl font-normal opacity-60">
                /80
              </span>
            </div>
            <div className="text-sm md:text-base text-center lg:text-right opacity-70 mt-1 uppercase tracking-wider">
              {finalPercentage}% Alignment Score
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="relative max-w-[1200px] mx-auto z-10 grid grid-cols-2 md:grid-cols-6 gap-2 mt-6 pt-4 border-t border-white/10 text-[11px] md:text-xs p-6 md:p-12 ">
          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Name:
            </div>
            <div className="font-medium text-sm md:text-[13px]">
              {fullName || "N/A"}
            </div>
          </div>

          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Email:
            </div>
            <div className="font-medium text-sm md:text-[13px] break-all">
              {lead?.email || "N/A"}
            </div>
          </div>

          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Company:
            </div>
            <div className="font-medium text-sm md:text-[13px]">
              {lead?.companyName || "N/A"}
            </div>
          </div>

          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Goal:
            </div>
            <div className="font-medium text-sm md:text-[13px]">
              {lead?.assessmentGoal || "N/A"}
            </div>
          </div>

          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Role:
            </div>
            <div className="font-medium text-sm md:text-[13px]">
              {lead?.role || "N/A"}
            </div>
          </div>

          <div>
            <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">
              Date:
            </div>
            <div className="font-medium text-sm md:text-[13px]">{date}</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-12 bg-white max-w-[1200px] mx-auto">
        {/* Four Dimension Scores Section */}
        <section className="mb-16">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Score Summary Dashboard
          </div>

          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-8"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Your Four Dimension Scores
          </h2>

          <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {dimensionScores.map((score: any, index: number) => {
                const color = colorMap[index];
                const score20 = getDimensionScoreOutOf20(score.percentage);

                return (
                  <div key={score.key || index}>
                    <div className="flex justify-between items-center mb-2 text-sm">
                      <span className="text-[#252525] font-medium">
                        {score.title}
                      </span>

                      <span className="font-semibold" style={{ color }}>
                        {score20}
                        <small className="text-gray-500 font-normal">/20</small>
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${score.percentage}%`,
                          backgroundColor: color,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data Analysis Section */}
        <section className="mb-16">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Data Analysis
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-8"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            What Your Numbers Reveal
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
              <div className="text-[32px] font-bold text-[#10B981] mb-1">
                {strongest?.percentage || 0}%
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
                Strongest Area
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
              <div className="text-[32px] font-bold text-[#D95D56] mb-1">
                {weakest?.percentage || 0}%
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
                Weakest Area
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
              <div className="text-[32px] font-bold text-[#252525] mb-1">
                {pointSpread}
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
                Point Spread /20
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
              <div className="text-[32px] font-bold text-[#252525] mb-1">
                {aboveAverage}/{dimensionScores.length || 4}
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
                Above Average
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-[#4B5563] leading-relaxed max-w-4xl">
            <span className="font-bold text-[#1C1C1C]">
              Score Distribution:
            </span>{" "}
            Wide spread across dimensions — you have strong foundations in some
            areas but critical weaknesses in others. Your strongest dimension is{" "}
            <span className="font-bold text-[#1C1C1C]">
              {strongest?.title || "N/A"} ({strongest?.percentage || 0}%)
            </span>{" "}
            and your weakest is{" "}
            <span className="font-bold text-[#1C1C1C]">
              {weakest?.title || "N/A"} ({weakest?.percentage || 0}%)
            </span>
            . {aboveAverage} of your {dimensionScores.length || 4} dimensions
            score above average.
          </p>
        </section>

        {/* Fragmented Alignment Section */}
        <section className="mb-16">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            What This Means
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {band?.diagnosis || "N/A"} · {band?.maturityInterpretation || "N/A"}
          </h2>

          <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#000000] mb-6">
            <p className="text-[#374151] text-sm md:text-xl italic font-medium leading-relaxed">
              "{result?.primaryTensionBody || band?.tension || "N/A"}"
            </p>
          </div>

          <p className="text-sm text-[#6B7280] leading-relaxed">
            {band?.insight || "N/A"}
          </p>
        </section>

        {/* Diagnostic Interpretation Section */}
        <section className="mb-8">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Auto-Generated Insight
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Diagnostic Interpretation · Based on Your Results
          </h2>

          <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#FA981B]">
            <p className="text-[#374151] text-sm md:text-xl font-medium leading-relaxed">
              Your results place you in the{" "}
              <span className="text-[#1C1C1C] font-semibold">
                {band?.diagnosis || "N/A"}
              </span>{" "}
              range, primarily driven by low performance in{" "}
              <span className="text-[#1C1C1C] font-semibold">
                {weakest?.title || "N/A"} ({weakest?.percentage || 0}%)
              </span>
              . This indicates that while{" "}
              {dimensionScores.filter((s: any) => s.percentage >= 70).length} of
              your {dimensionScores.length || 4} dimensions are performing well,
              inconsistencies in how experiences are delivered are creating
              friction at a fundamental level.
            </p>
          </div>

          <p className="mt-8 text-xs text-[#9CA3AF] italic">
            Harmony 360 Lite identifies where alignment gaps exist. The Full
            Harmony 360 reveals why they exist — and how to fix them.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <p className="text-[#008900] text-sm">Where You're Strong</p>
            <h4 className="text-[#252525] text-xl font-medium py-2">
              {strongest?.title || "N/A"}
            </h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Your strongest dimension at{" "}
              {strongest ? getDimensionScoreOutOf20(strongest.percentage) : 0}
              /20 ({strongest?.percentage || 0}%). This area is contributing
              positively to your overall brand experience and provides a
              foundation to build from.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
            <p className="text-[#E64437] text-sm">
              Where Alignment Breaks Down
            </p>
            <h4 className="text-[#252525] text-xl font-medium py-2">
              {weakest?.title || "N/A"}
            </h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Your most critical gap at{" "}
              {weakest ? getDimensionScoreOutOf20(weakest.percentage) : 0}/20 (
              {weakest?.percentage || 0}%). This area should be improved first
              because it may be creating friction across your team, processes,
              and customer experience.
            </p>
          </div>
        </div>

        {/* Industry Context · Tension */}
        <section className="mb-8">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Industry Context · {lead?.industry || "General"}
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {result?.primaryTensionTitle ||
              `Primary Tension · Driven by ${weakest?.title || "Alignment"}`}
          </h2>

          <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#E64437]">
            <p className="text-[#374151] text-sm md:text-xl italic font-medium leading-relaxed">
              {result?.primaryTensionBody || band?.tension || "N/A"}
            </p>
          </div>
        </section>

        {/* Based on Your Goal */}
        <section className="mb-8">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Industry Context · {lead?.industry || "General"}
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {result?.customerGoalTitle ||
              `Based on Your Goal: ${lead?.assessmentGoal || "N/A"}`}
          </h2>

          <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#4978BC]">
            <p className="text-[#374151] text-sm md:text-xl italic font-medium leading-relaxed">
              {result?.customerGoalBody ||
                "Your selected goal helps determine which alignment gaps should be prioritized first."}
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-8">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Industry Context · {lead?.industry || "General"}
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Why This Matters in Your Sector
          </h2>

          <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#FA981B]">
            <p className="text-[#374151] text-sm md:text-xl italic font-medium leading-relaxed">
              In the {lead?.industry || "selected"} sector, every touchpoint
              shapes trust. A single inconsistent interaction can affect
              customer experience, employee confidence, and long-term brand
              credibility.
            </p>
          </div>
        </section>

        {/* Where Each Dimension Stands Section */}
        <section className="mb-20">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Key Alignment Insight Per Dimension
          </div>

          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-10"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Where Each Dimension Stands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dimensionScores.map((score: any, index: number) => {
              const color = colorMap[index];
              const score20 = getDimensionScoreOutOf20(score.percentage);

              return (
                <div
                  key={score.key || index}
                  className="bg-white border rounded-xl  shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col"
                  style={{ borderColor: color }}
                >
                  <div className="rounded-xl" style={{
                    background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`
                  }}>
                    <div className="flex items-start justify-between gap-4 mb-4 px-8 pt-8" >
                      <div>
                        <p
                          className="text-xs mb-2"
                          style={{
                            color,
                          }}
                        >
                          Dimension 0{index + 1}
                        </p>

                        <h4 className="text-[#252525] text-sm md:text-xl font-medium" style={{ color: color }}>
                          {score.title}
                        </h4>
                      </div>

                      <div
                        className="text-[28px] font-bold"
                        style={{
                          color,
                        }}
                      >
                        {score20}
                        <span className="text-base font-normal">/20</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">

                    <p className="text-sm text-[#4B5563] leading-relaxed ">
                      {getDimensionInsight(score20)}
                    </p>

                    <div className="text-xs font-bold text-[#252525] uppercase mt-2 mb-2">
                      Operational Reality
                    </div>

                    <ul className="text-sm text-[#4B5563] leading-relaxed list-disc pl-5 mb-4">
                      <li>Current score: {score20}/20</li>
                      <li>Alignment percentage: {score.percentage}%</li>
                      <li>
                        Priority level based on comparative dimension performance
                      </li>
                    </ul>

                    <div className="text-xs font-bold text-[#252525] uppercase mt-2 mb-2">
                      Next Step
                    </div>

                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {getDimensionNextStep(score20)}
                    </p>
                  </div>


                </div>
              );
            })}
          </div>
        </section>

        {/* Business Impact of Misalignment Section */}
        <section className="mb-20">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            Why This Matters
          </div>
          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-10"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Business Impact of Misalignment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
              <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">
                01
              </div>
              <p className="text-[15px] text-[#4B5563] leading-relaxed">
                Inconsistent customer experiences across every touchpoint
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
              <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">
                02
              </div>
              <p className="text-[15px] text-[#4B5563] leading-relaxed">
                Reduced employee clarity and ownership of the brand
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
              <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">
                03
              </div>
              <p className="text-[15px] text-[#4B5563] leading-relaxed">
                Operational inefficiencies that compound over time
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
              <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">
                04
              </div>
              <p className="text-[15px] text-[#4B5563] leading-relaxed">
                Difficulty scaling your brand promise as you grow
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mb-20">
          <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">
            What Needs To Happen Next
          </div>

          <h2
            className="text-xl md:text-[28px] font-medium text-[#252525] mb-10"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Recommendations
          </h2>

          <div className="space-y-3">
            <div className="flex bg-[#F5F5F5]">
              <div className="w-12 bg-[#222222] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="p-4 text-sm text-[#4B5563] leading-relaxed">
                <strong className="text-[#252525]">
                  {result?.customerGoalTitle}
                </strong>
                <br />
                {result?.customerGoalBody}
              </div>
            </div>

            <div className="flex bg-[#F5F5F5]">
              <div className="w-12 bg-[#222222] text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="p-4 text-sm text-[#4B5563] leading-relaxed">
                <strong className="text-[#252525]">
                  {result?.primaryTensionTitle}
                </strong>
                <br />
                {result?.primaryTensionBody}
              </div>
            </div>


          </div>
        </section>
      </div>

      <section className="bg-[#1F324F] w-full font-sans relative overflow-hidden py-2 md:py-5">
        <div
          className="absolute right-30 bottom-[-70] w-64 h-64 md:w-80 md:h-80 lg:w-150 lg:h-150 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/bgFor.svg')",
            backgroundSize: "contain",
            backgroundPosition: "",
          }}
        />

        <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <button className="text-xs sm:text-sm text-[#FFFFFF] rounded-full bg-white/5 backdrop-blur-sm border border-white/5 mb-4 shadow-sm px-3 py-1.5 sm:px-4 sm:py-1.5 inline-block">
                Start Here Instant
              </button>

              <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
                You've Seen the Gaps. Now <span className="italic opacity-35">Uncover What's Causing</span> Them

              </h2>

              <p className="text-base sm:text-base text-[#B5B5B5] leading-relaxed max-w-2xl mx-auto md:mx-0">
                Your Harmony 360 Lite report has identified where alignment is breaking down in your organization. But knowing where the problem exists is only the first step. The Full Harmony 360 Diagnostic goes deeper-revealing the root causes behind these gaps, how they are impacting your performance, and the exact actions required to fix them.
              </p>
              <h4 className="text-base sm:text-base text-[#FFFFFF] font-semibold mt-5">With the Full Harmony 360, you will:</h4>
              <p className="text-base sm:text-base text-[#B5B5B5] leading-relaxed max-w-2xl mx-auto md:mx-0">
                Identify the underlying causes of misalignment across all 7 dimensions Uncover hidden friction between your brand, culture, and operations Receive targeted, actionable recommendations tailored to your business Gain a clear roadmap to improve consistency, performance, and customer experience
              </p>
            </div> 
 
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <button className="px-4 sm:px-6 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg border-none bg-[#FFFFFF] text-[#2B2B2B] text-sm sm:text-base md:text-sm lg:text-lg font-sans font-semibold transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer">
                Unlock Your Full Harmony 360 Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
