export default function Triangle(){

    return(

        <section className="relative w-full lg:py-20 py-10 px-6 sm:px-12 lg:px-24 bg-white bg-cover bg-center bg-no-repeat font-sans" style={{
            backgroundImage: "url('/color.png')",
          }}>
      <div className="relative max-w-7xl mx-auto ">
        
        
        
        <div className="relative flex items-center justify-center  px-4 py-10">
          
          <div className="max-w-7xl w-full mx-auto">
            <div className="text-center">
                <button className="text-sm md:text-sm text-[#494949] rounded-full bg-white/15 backdrop-blur-sm border border-white/5 mb-3 md:mb-4 lg:mb-6 shadow-sm px-3 py-1">The Core Problem</button>
              
              <h2 className="text-xl md:text-5xl font-serif font-bold text-[#252525] mb-4 tracking-tight">
               If Your Team Isn't Aligned, <br /> Your Brand <span className="italic text-[#426DAB]">Can't Be Consistent</span>
              </h2>
              
              {/* Main description */}
              <p className="text-[#5E5E5E] text-base sm:text-base mb-6 max-w-md mx-auto">
                Inconsistent experiences don't happen by accident — they're a result of internal misalignment. And customers notice.
              </p>
              
              <div className="mb-6 max-w-md mx-auto">
                
                  <button className="px-3 lg:px-5 py-2.5 rounded-lg border-none bg-[#F19526] text-white text-xs lg:text-lg font-sans font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_15px_0_#F195264D]">Discover Your True Alignment Score →</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}