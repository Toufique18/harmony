export default function Hero() {
  return (
    <section className="w-full bg-[#FFFFFF]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between py-10">
    
    {/* left side */}
    <div className="w-full md:w-1/2">
      <div className="flex items-center gap-3">
        <img src="groupImage.svg" alt="image" />
        <p className="font-sans text-[1rem] md:text-[1.12rem] text-[#494949]">
          Trusted by Worldwide
        </p>
      </div>

      <h1 className="font-bold font-serif text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-[#252525] mt-6 leading-snug">
        Discover Where Your Brand, Culture, and Operations{" "}
        <span className="italic text-[#426DAB]">Are Out of Sync</span>
      </h1>

      <p className="text-[#676767] text-sm md:text-base mt-4 font-sans">
        Take the Harmony 360 Lite Diagnostic and uncover where misalignment is
        impacting your customer experience, team performance, and operational
        efficiency—in just a few minutes.
      </p>

      {/* Button container - centered on mobile, left aligned on desktop */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-4">
        <div className="w-full sm:w-auto flex justify-center md:justify-start">
          <button className="font-sans px-4 lg:px-5 py-2.5 rounded-lg border-none bg-[#F19526] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_15px_0_#F195264D] whitespace-nowrap">
            Discover Your True Alignment Score →
          </button>
        </div>
        <p className="font-sans text-sm text-[#494949] text-center sm:text-left">Under 5 minutes</p>
      </div>
    </div>

    {/* right side */}
    <div className="w-full md:w-1/2 text-center md:text-end mt-8 md:mt-0">
      <img
        className="w-full max-w-none"
        src="heroImage.svg"
        alt="hero"
      />
    </div>

  </div>

</section>
  );
}
