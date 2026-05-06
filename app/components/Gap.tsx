export default function Gap() {

  return (

    // <section className="w-full py-10 px-6 sm:px-12 lg:px-24">
    //     <div className="max-w-7xl mx-auto bg-[#FAFAFA] items-center flex justify-between">

    //         <div className="w-1/2">
    //             <img src="colon.png" alt="" />
    //             <h3 className="text-2xl text-[#252525] font-semibold">The gap between where you think you are and where you actually are — that's where most businesses lose customers.</h3>
    //         </div>

    //         <div className="">
    //             <img src="paths.png" alt="" />
    //         </div>

    //     </div>
    // </section>
    <section className="py-6 md:py-20 px-6 sm:px-12 lg:px-10 bg-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between rounded-xl bg-[#FAFAFA] px-3 py-10 md:py-20 lg:px-6 gap-3">
        {/* Left Side: */}
        <div className="md:w-1/2">
          <img src="colon.png" alt="" />
          <h3 className="text-xl text-[#252525] md:2xl font-semibold mt-2">The gap between where you think you are and where you actually are — that's where most businesses lose customers.</h3>
        </div>

        {/* Right Side:  */}
        <div className="">
          <div className="">
            <img
              src="/path.svg"
              alt=""
              className="w-full h-full"
            />

          </div>


        </div>
      </div>
    </section>
  )
}
