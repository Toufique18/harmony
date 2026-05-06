export default function Recommendations() {
    return (
        <section className="mb-20">
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">What Needs to Happen Next</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-10 font-serif" >
                        Recommendations
                    </h2>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-stretch">
                            <div className="w-16 h-auto md:w-20 bg-[#252525] flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
                                1
                            </div>
                            <div className="flex-1 bg-[#F8F8F8] p-6 md:p-8 flex flex-col justify-center">
                                <h3 className="text-[16px] md:text-[18px] font-bold text-[#252525] mb-1">Clarify Expectations</h3>
                                <p className="text-sm md:text-[15px] text-[#4B5563]">
                                    Establish a single, clearly articulated brand definition and cascade it with leadership alignment before broader rollout.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-stretch">
                            <div className="w-16 h-auto md:w-20 bg-[#252525] flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
                                2
                            </div>
                            <div className="flex-1 bg-[#F8F8F8] p-6 md:p-8 flex flex-col justify-center">
                                <h3 className="text-[16px] md:text-[18px] font-bold text-[#252525] mb-1">Align Internal Execution</h3>
                                <p className="text-sm md:text-[15px] text-[#4B5563]">
                                    Connect every team's daily operations to the brand promise through structured reinforcement — not assumption.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-stretch">
                            <div className="w-16 h-auto md:w-20 bg-[#252525] flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
                                3
                            </div>
                            <div className="flex-1 bg-[#F8F8F8] p-6 md:p-8 flex flex-col justify-center">
                                <h3 className="text-[16px] md:text-[18px] font-bold text-[#252525] mb-1">Strengthen Consistency Across Touchpoints</h3>
                                <p className="text-sm md:text-[15px] text-[#4B5563]">
                                    Map the full customer journey, identify breakdown points, and standardize experience delivery end-to-end.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
    )
}