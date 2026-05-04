// app/report/page.tsx
export default function Report() {
  return (
   
    <section className="bg-[#2B2B2B] w-full ">
        <div className="max-w-7xl mx-auto py-10 px-4">

            <div className="text-white mb-12">
        <button className="text-sm md:text-sm text-[#FFFFFF] rounded-full bg-white/5 backdrop-blur-sm border border-white/5 mb-3 shadow-sm px-3 py-1">Your Report Includes</button>
          
          <h2 className="text-2xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
            This Is Not a Survey <span className="italic text-[#FFFFFF94]">It's a Diagnostic.</span>
          </h2>
          <p className="text-[#FFFFFF99] text-sm">
            A structured four-step process that goes from your details to a complete diagnostic report in under five minutes.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 

            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="uil.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                
                Brand Alignment Score
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                A clear score out of 80 with percentage and band placement — across all four dimensions normalized to a 20-point scale each.
              </p>
            </div>
            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="arrow.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                Dimension-Level Insight
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                Each of your four dimensions gets its own detailed analysis — including operational reality, what it means, and the next step.
              </p>
            </div>
            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="flash.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                Dynamic Tension Statement
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                Your lowest-scoring dimension drives a personalised tension statement — the one sentence that describes exactly where your brand is breaking down.
              </p>
            </div>
            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="box.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                Industry-Aware Context
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                Your sector and primary goal are woven into the report — creating output that speaks directly to your business reality, not a generic template.
              </p>
            </div>
            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="search.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                Root Cause Identification
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                The diagnostic identifies which dimension is your primary gap and frames it as the gateway to deeper diagnostic work with the Full Harmony 360.
              </p>
            </div>
            <div 
              className={`p-8 rounded-2xl transition-all duration-300 group bg-[#0000003D] backdrop-blur-xl border border-white/5 hover:border-blue-500 hover:bg-blue/10`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/5  flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <img src="document.svg" alt="" />
              </div>
            

              <h3 className="text-xl text-white font-semibold mb-4 tracking-tight">
                Print-Ready Report
              </h3>
              
              <p className="text-[#FFFFFF9C] text-sm leading-relaxed">
                
                A professionally designed report you can print, PDF, and share with your leadership team — complete with the Harmony 360 brand.
              </p>
            </div>

        </div>

        </div>
    </section>
  );
}
