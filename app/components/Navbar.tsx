"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>
      <nav className="w-full bg-[#FFFFFF] border-none top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
        <Link href="/"><img src="harmony-logo.png" alt="harmony" /></Link>


          <Link href="/survey" className="px-3 lg:px-5 py-2.5 rounded-lg border border-[#F09425] text-[#F09425] hover:bg-[#F09425] hover:text-white text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95">
            Get Start Free
          </Link>

          
        </div>
      </nav> 

      {/* Mobile Menu Overlay */}
     
    </>
  );
} 
