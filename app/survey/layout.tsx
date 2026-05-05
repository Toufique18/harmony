import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFFFF] flex justify-center py-10 md:py-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
