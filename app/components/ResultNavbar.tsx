"use client";

import Link from "next/link";

export default function ResultNavbar() {
    return (
        <nav className="w-full bg-[#FFFFFF] border-none top-0 z-50 sticky print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <img src="/harmony-logo.png" alt="harmony" />
                </Link>

                <div className="flex gap-2">
                    <button 
                        onClick={() => window.print()}
                        className="px-3 lg:px-5 py-2.5 border border-[#F09425] text-[#F09425] hover:bg-[#F09425] hover:text-white text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer rounded-[4px]"
                    >
                        Download PDF
                    </button>
                    <Link href="/survey" className="px-3 lg:px-5 py-2.5 rounded-[4px] text-[#FFFFFF] bg-[#F09425] text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer">
                        Start Again
                    </Link>
                </div>
            </div>
        </nav>
    );
}
