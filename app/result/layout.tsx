import Footer from "../components/Footer";
import Link from "next/link";
export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="w-full bg-[#FFFFFF] border-none top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
        <img src="harmony-logo.png" alt="harmony" />


        <div className="flex gap-2">
            <button className="px-3 lg:px-5 py-2.5 border border-[#F09425] text-[#F09425] hover:bg-[#F09425] hover:text-white text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer">
            Download PDF
          </button>
          <Link href="/survey" className="px-3 lg:px-5 py-2.5  text-[#FFFFFF] bg-[#F09425] text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer">
            Start Again
          </Link>
        </div>
          

          
        </div>
      </nav>
      <div className="min-h-screen bg-[#FFFFFF] flex justify-center py-10 md:py-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
