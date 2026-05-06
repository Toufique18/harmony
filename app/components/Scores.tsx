export default function Scores() {
    return (
        <section className="mb-16">
            <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">Score Summary Dashboard</div>
            <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-8" style={{ fontFamily: 'var(--font-display), serif' }}>
                Your Four Dimension Scores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border border-gray-100 rounded-xl p-8 md:p-10 shadow-sm">
                {/* Dimension 1 */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-[#374151] text-sm md:text-base">Brand Clarity & Promise</span>
                        <span className="text-sm font-semibold">10<span className="text-[10px] text-gray-400 ml-1">/25</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D95D56] rounded-full" style={{ width: '40%' }}></div>
                    </div>
                </div>

                {/* Dimension 2 */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-[#374151] text-sm md:text-base">Customer Journey Consistency</span>
                        <span className="text-sm font-semibold">15<span className="text-[10px] text-gray-400 ml-1">/25</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F09425] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>

                {/* Dimension 3 */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-[#374151] text-sm md:text-base">Employee & Brand Engagement</span>
                        <span className="text-sm font-semibold">15<span className="text-[10px] text-gray-400 ml-1">/25</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#10B981] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>

                {/* Dimension 4 */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-[#374151] text-sm md:text-base">Internal Process Alignment</span>
                        <span className="text-sm font-semibold">15<span className="text-[10px] text-gray-400 ml-1">/25</span></span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#4A6B9C] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}