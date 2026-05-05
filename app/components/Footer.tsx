export default function Footer() {
  return (
    <section className="font-sans relative overflow-hidden bg-[#FFFFFF] py-20">
  {/* Background Image - 80% width and centered */}
  <div 
    className="absolute inset-0 bottom-[-200] bg-no-repeat pointer-events-none"
    style={{
      backgroundImage: "url('/Harmony360.svg')",
      backgroundSize: "80% auto", // 80% width, auto height
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.5 // Optional: adjust opacity as needed
    }}
  />

  <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <p className="text-sm font-normal text-[#252525]">
      Alignment is not accidental — it is designed, measured, and executed.
    </p>
  </div>
</section>
  );
}