import React from "react";

const WeAreDoersSection = () => {
  return (
    <section className="text-center w-full relative overflow-hidden flex items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20">
      {/* Ellipse, no animation and moved up slightly */}
      <div
        className="absolute left-1/2 top-1/3 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Text Container */}
      <div className="z-10 max-w-4xl mx-auto px-4 mt-[117px] lg:mt-[85px]">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro">
          Med andra ord: <br />
          vi är <span className="text-[#33ABBD]">doers.</span>
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl font-extralight mt-4 text-left max-w-4xl">
          Vi pratar inte. Vi gör. Vi levererar och vi får folk att se nya
          möjligheter. Varje dag, i varje projekt, anstränger vi oss alltid
          för att ge det där lilla extra. Och så har vi himla kul under tiden,
          förstås.
        </p>
      </div>
    </section>
  );
};

export default WeAreDoersSection;
