// app/page.tsx
export default function Diagnostic() {
  return (
    <section className=" bg-white md:py-16 py-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
        <button className="text-sm md:text-sm rounded-xl text-[#494949] border-[#F0F0F0] mb-3 shadow-sm px-2 py-1">THE PROCESS</button>
          
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#252525] mb-4">
            How the Diagnostic <span className="italic text-[#426DAB]">Works</span>
          </h2>
          <p className="text-[#5E5E5E] text-sm max-w-xl mx-auto">
            A structured four-step process that goes from your details to a complete diagnostic report in under five minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 01 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-bold text-gray-200">01</span>
                
              </div>
              <h3 className="text-[1rem] font-semibold text-[#252525] mb-1">Enter Your Details</h3>
              <p className="text-[#5f5e5e] text-xs">
                Your name, role, company, industry, and primary goal - so your report speaks directly to your situation.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-bold text-gray-200">02</span>
                
              </div>
              <h3 className="text-[1rem] font-semibold text-[#252525] mb-1">Answer 8 Questions</h3>
              <p className="text-[#5f5e5e] text-xs">
                Two targeted questions per dimension. Mix of 1-5 scales and Yes/No - each designed to surface the truth quickly.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-bold text-gray-200">03</span>
                
              </div>
              <h3 className="text-[1rem] font-semibold text-[#252525] mb-1">Scores Are Calculated</h3>
              <p className="text-[#5f5e5e] text-xs">
                Raw scores are normalized to /20 per dimension and /80 total. Your result is placed on the four-band maturity ladder.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-bold text-gray-200">04</span>
                
              </div>
              <h3 className="text-[1rem] font-semibold text-[#252525] mb-1">Your Report Is Generated</h3>
              <p className="text-[#5f5e5e] text-xs">
                A concise diagnostic report with insights, tension statements, and a tailored upgrade path.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}