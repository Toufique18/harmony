export default function Brand(){

    return(

        <section className="bg-white w-full md:py-15 py-12 px-4 font-sans">
  <div className="max-w-7xl mx-auto">
    
    {/* Flex container */}
    <div className="flex flex-col">
      
      {/* Left Side - Top */}
      <div className="flex flex-col items-start">
        <button className="text-sm md:text-sm rounded-xl text-[#494949] border border-[#F0F0F0] mb-3 shadow-sm px-3 py-1.5 bg-white">
          THE REALITY CHECK
        </button>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#252525] mb-6 leading-tight max-w-2xl">
          Where Does Your <br className="hidden sm:block" />
          <span className="text-[#426DAB] italic">Brand Truly</span> Stand?
        </h2>
      </div>
      
      {/* Right Side - Bottom */}
      <div className="flex flex-col mt-8 md:mt-8 lg:mt-8 md:ml-auto md:w-1/2">
        <p className="text-base md:text-base text-[#5E5E5E] leading-relaxed">
          Most organizations assume they're aligned. Few actually are. 
          This assessment reveals the truth.
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mt-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#A68E1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-[#A68E1D] font-medium">10 Questions</span>
          </div>
          
          <span className="text-[#BDBDBD]  sm:inline">|</span>
          
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#DE6213]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-[#DE6213] font-medium">Under 5 Minutes</span>
          </div>
          
          <span className="text-[#BDBDBD]  sm:inline">|</span>
          
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#08732D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-[#08732D] font-medium">Instant Report</span>
          </div>
        </div>
        
        <div className="border-b border-[#E0E0E0] pt-4 mt-4"></div>
      </div>
      
    </div>
  </div >

  <div className="max-w-7xl mx-auto text-center mt-10">
  
  <h2 className="text-xl md:text-2xl font-semibold text-[#252525]">
    Where will you land?
  </h2>
  
  <p className="text-base md:text-lg font-normal text-[#5E5E5E] mb-6">
    Every organization falls somewhere on this spectrum.
  </p>
  
  {/* Centered SVG */}
  <div className="flex justify-center items-center">
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="animate-bounce text-[#426DAB]"
    >
      <path 
        d="M12 5V19M12 19L19 12M12 19L5 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
  
</div>


{/* slide bar */}

<div className="max-w-7xl mx-auto mt-10">

    <img src="slider.svg" alt="" />

</div>

        <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
  {/* Card 1 - Misaligned */}
  <div className="border border-[#E8E8E8] rounded-xl p-6 bg-[#FAFAFA] hover:shadow-md transition-shadow">
  <div className="flex flex-col text-center items-center justify-center gap-3 mb-3">
    <div className="w-12 h-12 rounded-full bg-[#dc3c28]/10 flex items-center justify-center mx-auto">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc3c28" strokeWidth="2.2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </div>
    <div className="text-xl font-bold" style={{ color: "#dc3c28" }}>Misaligned</div>
  </div>
  <div className="text-[#5E5E5E] leading-relaxed mb-3 text-center">
    Critical gaps across key areas are creating inconsistent experiences and hidden risks.
  </div>
  <div className="text-xl font-bold text-center" style={{ color: "#dc3c28" }}>0 – 31</div>
</div>
  
  {/* Card 2 - Fragmented */}
  <div className="border border-[#E8E8E8] rounded-xl p-6 bg-[#FAFAFA] hover:shadow-md transition-shadow">
  <div className="flex flex-col text-center items-center justify-center gap-3 mb-3">
    <div className="w-12 h-12 rounded-full bg-[#f39c12]/10 flex items-center justify-center mx-auto">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2.2" strokeLinecap="round">
        <line x1="12" y1="19" x2="12" y2="5"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>
    <div className="text-xl font-bold" style={{ color: "#f39c12" }}>Fragmented</div>
  </div>
  <div className="text-[#5E5E5E] leading-relaxed mb-3 text-center">
    Critical gaps across key areas are creating inconsistent experiences and hidden risks.
  </div>
  <div className="text-xl font-bold text-center" style={{ color: "#f39c12" }}>32 – 47</div>
</div>
  
  {/* Card 3 - Developing */}
  <div className="border border-[#E8E8E8] rounded-xl p-6 bg-[#FAFAFA] hover:shadow-md transition-shadow">
  <div className="flex flex-col text-center items-center justify-center gap-3 mb-3">
    <div className="w-12 h-12 rounded-full bg-[#3498db]/10 flex items-center justify-center mx-auto">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    </div>
    <div className="text-xl font-bold" style={{ color: "#3498db" }}>Developing</div>
  </div>
  <div className="text-[#5E5E5E] leading-relaxed mb-3 text-center">
    You're making progress, but important gaps remain that limit consistency and scale.
  </div>
  <div className="text-xl font-bold text-center" style={{ color: "#3498db" }}>48 – 63</div>
</div>
  
  {/* Card 4 - Strong */}
  <div className="border border-[#E8E8E8] rounded-xl p-6 bg-[#FAFAFA] hover:shadow-md transition-shadow">
  <div className="flex flex-col text-center items-center justify-center gap-3 mb-3">
    <div className="w-12 h-12 rounded-full bg-[#27ae60]/10 flex items-center justify-center mx-auto">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.2" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
    <div className="text-xl font-bold" style={{ color: "#27ae60" }}>Strong</div>
  </div>
  <div className="text-[#5E5E5E] leading-relaxed mb-3 text-center">
    Your organization is well aligned and built for consistent delivery and sustainable growth.
  </div>
  <div className="text-xl font-bold text-center" style={{ color: "#27ae60" }}>64 – 80</div>
</div>
  
</div>
        </div>
        
</section>
    )
}