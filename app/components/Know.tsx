import Link from "next/link";

export default function Know() {

  return (

    <section className="bg-[#1F324F] w-full font-sans relative overflow-hidden py-2 md:py-5">
      {/* Background Image - Top Right Corner */}
      <div
        className="absolute top-[-250] right-0 w-64 h-64 md:w-80 md:h-80 lg:w-150 lg:h-150 bg-no-repeat bg-top-right pointer-events-none"
        style={{
          backgroundImage: "url('/fluent_clock.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top right"
        }}
      />

      <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stack on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">

          {/* Left Content - Full width on mobile, half on desktop */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <button className="text-xs sm:text-sm text-[#FFFFFF] rounded-full bg-white/5 backdrop-blur-sm border border-white/5 mb-4 shadow-sm px-3 py-1.5 sm:px-4 sm:py-1.5 inline-block">
              Uncover Misalignment
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
              Know exactly where you stand — in <span className="italic block sm:inline opacity-35">under 5 minutes.</span>
            </h2>

            <p className="text-base sm:text-base text-[#B5B5B5] leading-relaxed max-w-lg mx-auto md:mx-0">
              Eight questions. Four dimensions. One score that tells you precisely where alignment is breaking down — and a personalised report that tells you why it matters for your business.
            </p>
          </div>

          {/* Right Button - Full width on mobile, auto on desktop */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link href="/survey" className="font-sans px-4 lg:px-5 py-2.5 rounded-lg border-none bg-[#F19526] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_15px_0_#F195264D] whitespace-nowrap">
              Discover Your True Alignment Score →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
