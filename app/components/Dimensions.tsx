export default function Dimensions() {
    return (
        <section className="mb-20">
            <div className="text-[12px]  tracking-widest text-[#434343] font-normal mb-2">Key Alignment Insight Per Dimension</div>
            <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-10" style={{ fontFamily: 'var(--font-display), serif' }}>
                Where Each Dimension Stands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dimension 01 */}
                <div className="bg-white border border-gray-100 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="h-1.5 bg-[#10B981]"></div>
                    <div className="flex justify-between items-center  bg-[#EDF8ED] p-8">
                        <div>
                            <div className="text-[14px] font-normal text-[#10B981] opacity-70 uppercase tracking-wider mb-1">Dimension 01</div>
                            <h3 className="text-lg font-semibold text-[#10B981]">Brand Clarity & Promise</h3>
                        </div>
                        <div className="text-2xl font-bold text-[#10B981]">15<span className="text-xs text-[#10B981] ml-1 font-normal">/25</span></div>
                    </div>
                    <div className="p-8">

                        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                            Your brand lacks a clearly defined and internally understood promise. Teams are likely operating on different interpretations of what the business stands for.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-[13px] font-bold text-[#252525] mb-3">Operational Reality</h4>
                            <ul className="text-sm text-[#6B7280] space-y-2">
                                <li className="flex gap-2 pl-2"><span>•</span>No shared brand reference point across teams</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Teams making independent judgment calls</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Difficulty aligning marketing, HR, and operations</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[13px] font-bold text-[#252525] mb-2">Next Step</h4>
                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                Establish a clearly defined brand promise and ensure leadership alignment before cascading it across the organization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dimension 02 */}
                <div className="bg-white border border-gray-100 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="h-1.5 bg-[#F09425]"></div>
                    <div className="flex justify-between items-start  p-8 bg-[#F8F6ED]">
                        <div>
                            <div className="text-[11px] font-bold text-[#F09425] uppercase tracking-wider mb-1">Dimension 02</div>
                            <h3 className="text-lg font-bold text-[#F09425]">Customer Journey Consistency</h3>
                        </div>
                        <div className="text-2xl font-bold text-[#F09425]">10<span className="text-xs text-[#F09425] ml-1 font-normal ">/25</span></div>
                    </div>
                    <div className="p-8">

                        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                            Your customer journey is consistently and deliberately designed across touchpoints. Customers receive a predictable, high-quality experience regardless of channel.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-[13px] font-bold text-[#252525] mb-3">Operational Reality</h4>
                            <ul className="text-sm text-[#6B7280] space-y-2">
                                <li className="flex gap-2 pl-2"><span>•</span>Predictable, high-quality experience at every touchpoint</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Strong customer trust built through consistency</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Clear journey design guides every interaction</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[13px] font-bold text-[#252525] mb-2">Next Step</h4>
                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                Optimize and innovate within the journey to enhance differentiation and deepen customer loyalty.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dimension 03 */}
                <div className="bg-white border border-gray-100 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="h-1.5 bg-[#D95D56]"></div>
                    <div className="flex justify-between items-start  p-8 bg-[#F8EDED]">
                        <div>
                            <div className="text-[11px] font-bold text-[#D95D56] uppercase tracking-wider mb-1">Dimension 03</div>
                            <h3 className="text-lg font-bold text-[#D95D56]">Employee & Brand Engagement</h3>
                        </div>
                        <div className="text-2xl font-bold text-[#D95D56]">05<span className="text-xs text-[#D95D56] ml-1 font-normal">/25</span></div>
                    </div>
                    <div className="p-8">
                        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                            Employees are not fully aligned with or engaged in delivering the brand. Execution is likely inconsistent and dependent on individual interpretation rather than shared ownership.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-[13px] font-bold text-[#252525] mb-3">Operational Reality</h4>
                            <ul className="text-sm text-[#6B7280] space-y-2">
                                <li className="flex gap-2 pl-2  "><span>•</span>Low empowerment levels across the organization</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Inconsistent service delivery between teams</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Limited accountability for brand experience</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[13px] font-bold text-[#252525] mb-2">Next Step</h4>
                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                Re-engage employees by clearly connecting their roles to the brand and equipping them with the tools and authority to deliver it effectively.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dimension 04 */}
                <div className="bg-white border border-gray-100 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="h-1.5 bg-[#E64437]"></div>
                    <div className="flex justify-between items-start  p-8 bg-[#F8EDED]">
                        <div>
                            <div className="text-[11px] font-bold text-[#E64437] uppercase tracking-wider mb-1">Dimension 04</div>
                            <h3 className="text-lg font-bold text-[#E64437]">Internal Process Alignment</h3>
                        </div>
                        <div className="text-2xl font-bold text-[#E64437]">00<span className="text-xs text-[#E64437] ml-1 font-normal">/25</span></div>
                    </div>
                    <div className="p-8">

                        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                            Your internal systems are actively working against your desired customer experience, creating friction that limits execution regardless of your team's intent or effort.
                        </p>
                        <div className="mb-6">
                            <h4 className="text-[13px] font-bold text-[#252525] mb-3">Operational Reality</h4>
                            <ul className="text-sm text-[#6B7280] space-y-2">
                                <li className="flex gap-2 pl-2  "><span>•</span>Workarounds are the norm — not workflows</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Delays and inefficiencies compound over time</li>
                                <li className="flex gap-2 pl-2"><span>•</span>Staff compensating daily for broken systems</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[13px] font-bold text-[#252525] mb-2">Next Step</h4>
                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                Audit and redesign core processes to align with your CX goals — removing friction and enabling smoother, more consistent execution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}