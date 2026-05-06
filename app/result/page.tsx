"use client";

import React from 'react';
import Dimensions from '../components/Dimensions';
import Recommendations from '../components/Recommendations';
import Scores from '../components/Scores';

export default function ResultPage() {
    return (
        <div className="w-full  bg-white overflow-hidden font-sans">
            {/* Header Section */}
            <div className="bg-[#1C1C1C] text-white p-8 md:p-12 relative overflow-hidden">
                {/* Dotted Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                ></div>

                <div className="relative max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-[48px] font-bold leading-tight font-serif" >
                            Brand & Culture <br />
                            Alignment <span className="italic opacity-40">Snapshot</span>
                        </h1>
                    </div>

                    <div className="mt-6 md:mt-0 text-right">
                        <div className="text-5xl md:text-6xl font-bold">
                            32<span className="text-2xl md:text-3xl font-normal opacity-60">/100</span>
                        </div>
                        <div className="text-sm md:text-base opacity-70 mt-1 uppercase tracking-wider">
                            40% Alignment Score
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="relative max-w-[1200px] mx-auto z-10 grid grid-cols-2 md:grid-cols-6 gap-2 mt-6 pt-4 border-t border-white/10 text-[11px] md:text-xs p-6 md:p-12 ">
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Name:</div>
                        <div className="font-medium text-sm md:text-[13px]">Esther Howard</div>
                    </div>
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Email:</div>
                        <div className="font-medium text-sm md:text-[13px] break-all">nathan.roberts@example.com</div>
                    </div>
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Company:</div>
                        <div className="font-medium text-sm md:text-[13px]">Louis Vuitton</div>
                    </div>
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Goal:</div>
                        <div className="font-medium text-sm md:text-[13px]">Improve customer experience</div>
                    </div>
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Role:</div>
                        <div className="font-medium text-sm md:text-[13px]">CEO</div>
                    </div>
                    <div>
                        <div className="opacity-50 mb-1 uppercase tracking-widest font-semibold">Date:</div>
                        <div className="font-medium text-sm md:text-[13px]">12 May, 2026</div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 md:p-12 bg-white max-w-[1200px] mx-auto">

                {/* Four Dimension Scores Section */}
                <Scores/>

                {/* Data Analysis Section */}
                <section className="mb-16">
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">Data Analysis</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-8" style={{ fontFamily: 'var(--font-display), serif' }}>
                        What Your Numbers Reveal
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
                            <div className="text-[32px] font-bold text-[#10B981] mb-1">80%</div>
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Strongest Area</div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
                            <div className="text-[32px] font-bold text-[#D95D56] mb-1">10%</div>
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Weakest Area</div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
                            <div className="text-[32px] font-bold text-[#252525] mb-1">28</div>
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Point Spread /20</div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
                            <div className="text-[32px] font-bold text-[#252525] mb-1">2/4</div>
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Above Average</div>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-[#4B5563] leading-relaxed max-w-4xl">
                        <span className="font-bold text-[#1C1C1C]">Score Distribution:</span> Wide spread across dimensions — you have strong foundations in some areas but critical weaknesses in others. Your strongest dimension is <span className="font-bold text-[#1C1C1C]">Customer Journey Consistency (80%)</span> and your weakest is <span className="font-bold text-[#1C1C1C]">Internal Process Alignment (10%)</span>. 2 of your 4 dimensions score above your own average of 9/20.
                    </p>
                </section>

                {/* Fragmented Alignment Section */}
                <section className="mb-16">
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">What This Means</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Fragmented Alignment · Inconsistent / Siloed
                    </h2>

                    <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#000000] mb-6">
                        <p className="text-[#374151] text-lg md:text-xl italic font-medium leading-relaxed">
                            "This uneven execution creates unpredictability in both employee performance and customer experience — making it difficult to build trust and consistency at scale."
                        </p>
                    </div>

                    <p className="text-sm text-[#6B7280] leading-relaxed">
                        Your organization shows early signs of alignment, but performance varies significantly across teams and touchpoints. Some areas are functioning well, while others are creating friction and inconsistency.
                    </p>
                </section>

                {/* Diagnostic Interpretation Section */}
                <section className='mb-8'>
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">Auto-Generated Insight</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Diagnostic Interpretation · Based on Your Results
                    </h2>

                    <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#FA981B]">
                        <p className="text-[#374151] text-lg md:text-xl font-medium leading-relaxed">
                            our results place you in the <span className="text-[#1C1C1C]"> Fragmented Alignment</span> range, primarily driven by low performance in <span className="text-[#1C1C1C]">Internal Process Alignment (10%)</span>. This indicates that while 1 of your 4 dimensions is performing well, inconsistencies in how experiences are delivered are creating friction at a fundamental level.
                        </p>
                    </div>

                    <p className="mt-8 text-xs text-[#9CA3AF] italic">
                        Harmony 360 Lite identifies where alignment gaps exist. The Full Harmony 360 reveals why they exist — and how to fix them.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <p className='text-[#008900] text-sm'>Where You're Strong</p>
                            <h4 className='text-[#252525] text-xl font-medium py-2'>Customer Journey Consistency</h4>
                            <p className="text-sm text-[#4B5563] leading-relaxed">
                                Your strongest dimension at 16/20 (80%). This area is contributing positively to your overall brand experience and provides a foundation to build from.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <p className='text-[#E64437] text-sm'>Where Alignment Breaks Down</p>
                            <h4 className='text-[#252525] text-xl font-medium py-2'>Internal Process Alignmen</h4>
                            <p className="text-sm text-[#4B5563] leading-relaxed">
                                Your most critical gap at 2/20 (10%). Your internal systems are actively working against your desired customer experience, creating friction that limits execution regardless of your team's intent or effort.
                            </p>
                        </div>
                        
                       
                    </div>

                {/* Industry Context · Hospitality / Hotel Tension */}
                <section className='mb-8'>
                    <div className="text-[12px]  tracking-widest text-[#434343] font-normal mb-2">Industry Context · Hospitality / Hotel</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Primary Tension · Driven by Internal Process Alignment
                    </h2>

                    <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#E64437]">
                        <p className="text-[#374151] text-lg md:text-xl italic font-medium leading-relaxed">
                            This uneven execution creates unpredictability in both employee performance and customer experience — making it difficult to build trust and consistency at scale.
                        </p>
                    </div>

                </section>

                {/* Industry Context · Hospitality / Hotel Tension */}
                <section className='mb-8'>
                    <div className="text-[12px]  tracking-widest text-[#434343] font-normal mb-2">Industry Context · Hospitality / Hotel</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Based on Your Goal: Customer Experience
                    </h2>

                    <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#4978BC]">
                        <p className="text-[#374151] text-lg md:text-xl italic font-medium leading-relaxed">
                            Your Customer Journey Consistency score of 16/20 (80%) is the most critical number in this report. Consistent customer experience is not a marketing challenge — it's an alignment challenge. Fixing it requires looking upstream at your people, your processes, and how clearly your brand promise is understood internally.
                        </p>
                    </div>


                </section>

                {/* Industry Context · Hospitality / Hotel Tension */}
                <section className='mb-8'>
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">Industry Context · Hospitality / Hotel</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Why This Matters in Your Sector
                    </h2>

                    <div className="bg-[#F8F8F8] rounded-sm p-8 border-l-4 border-[#FA981B]">
                        <p className="text-[#374151] text-lg md:text-xl italic font-medium leading-relaxed">
                            In hospitality, every touchpoint is the brand. A single inconsistent interaction — from booking to checkout — can undo everything built by marketing, reputation management, and years of staff training.
                        </p>
                    </div>


                </section>



                {/* Where Each Dimension Stands Section */}
                <Dimensions />

                {/* Business Impact of Misalignment Section */}
                <section className="mb-20">
                    <div className="text-[12px] tracking-widest text-[#434343] font-normal mb-2">Why This Matters</div>
                    <h2 className="text-2xl md:text-[28px] font-medium text-[#252525] mb-10" style={{ fontFamily: 'var(--font-display), serif' }}>
                        Business Impact of Misalignment
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">01</div>
                            <p className="text-[15px] text-[#4B5563] leading-relaxed">
                                Inconsistent customer experiences across every touchpoint
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">02</div>
                            <p className="text-[15px] text-[#4B5563] leading-relaxed">
                                Reduced employee clarity and ownership of the brand
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">03</div>
                            <p className="text-[15px] text-[#4B5563] leading-relaxed">
                                Operational inefficiencies that compound over time
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col">
                            <div className="text-[42px] font-medium text-[#5F5F5F] mb-6 leading-none">04</div>
                            <p className="text-[15px] text-[#4B5563] leading-relaxed">
                                Difficulty scaling your brand promise as you grow
                            </p>
                        </div>
                    </div>
                </section>

                {/* Recommendations Section */}
                <Recommendations />


                


            </div>
            <section className="bg-[#1F324F] w-full font-sans relative overflow-hidden py-2 md:py-5">
                    
                    <div
                        className="absolute right-30 bottom-[-70] w-64 h-64 md:w-80 md:h-80 lg:w-150 lg:h-150 bg-no-repeat pointer-events-none"
                        style={{
                            backgroundImage: "url('/bgFor.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: ""
                        }}
                    />

                    <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 relative z-10">

                        {/* Stack on mobile, row on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">

                            {/* Left Content - Full width on mobile, half on desktop */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <button className="text-xs sm:text-sm text-[#FFFFFF] rounded-full bg-white/5 backdrop-blur-sm border border-white/5 mb-4 shadow-sm px-3 py-1.5 sm:px-4 sm:py-1.5 inline-block">
                                    Start Here Instant
                                </button>
 
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
                                    Uncover the Root <span className="italic block sm:inline opacity-35">Cause Behind</span> These Gaps
                                </h2>

                                <p className="text-base sm:text-base text-[#B5B5B5] leading-relaxed max-w-lg mx-auto md:mx-0">
                                    Upgrade to the Full Harmony 360 Diagnostic to gain deeper insights across all alignment areas and receive a structured action plan tailored to your organization.
                                </p>
                            </div>

                            {/* Right Button - Full width on mobile, auto on desktop */}
                            <div className="w-full md:w-auto flex justify-center md:justify-end">
                                <button className="px-4 sm:px-6 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg border-none bg-[#FFFFFF] text-[#2B2B2B] text-sm sm:text-base md:text-sm lg:text-lg font-sans font-semibold transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer">
                                    Upgrade to Full Harmony 360 
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
        </div>
    );
} 
