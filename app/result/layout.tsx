import type { Metadata } from "next";
import DownloadPdfButton from "../components/DownloadPdfBtn";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harmony | Report",
  description:
    "View your personalized Brand & Culture Alignment Snapshot and discover actionable insights for your organization.",
  icons: {
    icon: "/small-logo.svg",
  },
};
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
          <Link href="/">
            <Image
              src="/harmony-logo.png"
              alt="harmony"
              width={160}
              height={50}
              className="hidden md:block"
            />

            <Image
              src="/small-logo.svg"
              alt="harmony"
              width={50}
              height={50}
              className="block md:hidden"
            />
          </Link>
          <div className="flex gap-2">
            <DownloadPdfButton />
            <Link
              href="/survey"
              className="px-3 lg:px-5 py-2.5 rounded-[4px] text-[#FFFFFF] bg-[#F09425] text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
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
