import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Harmony | Survey",
  description: "Complete our diagnostic assessment to understand your organization's alignment across four key dimensions.",
  icons: {
    icon: "/small-logo.svg",
  },
};
export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="w-full bg-[#FFFFFF] border-none top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/harmony-logo.png" alt="harmony" className="hidden md:block" />
            <img src="/small-logo.svg" alt="harmony" className="block md:hidden" />
          </Link>


          <Link href="/survey" className="px-3 lg:px-5 py-2.5 rounded-lg border border-[#F09425] text-[#F09425] hover:bg-[#F09425] hover:text-white text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95">
            Discover Your True Alignment Score →
          </Link>


        </div>
      </nav>
      <div className="min-h-screen bg-[#FFFFFF] flex justify-center py-10 md:py-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
