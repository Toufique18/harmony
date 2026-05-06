import type { Metadata } from "next";
import Footer from "../components/Footer";
import ResultNavbar from "../components/ResultNavbar";

export const metadata: Metadata = {
    title: "Report Results",
};

export default function ResultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ResultNavbar />
            <div className="min-h-screen bg-[#FFFFFF] flex justify-center py-10 md:py-16 print:py-0 print:block">
                <div className="w-full max-w-[1200px] print:max-w-none">
                    {children}
                </div>
            </div>
            <div className="print:hidden">
                <Footer />
            </div>
        </>
    );
}
