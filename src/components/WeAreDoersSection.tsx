import React from "react";

const WeAreDoersSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes horizontal-bounce {
            0%, 100% {
              transform: translate(-50%, -50%) translateX(-10vw);
            }
            50% {
              transform: translate(-50%, -50%) translateX(10vw);
            }
          }
        `}
      </style>
      <section className="text-center w-full relative overflow-hidden flex items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20">
        {/* Ellipse Animation */}
        <div
          className="absolute left-1/2 top-1/2 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
          style={{
            animation: "horizontal-bounce 5s infinite",
            animationTimingFunction: "ease-in-out",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Text Container */}
        <div className="z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-century-gothic-pro mt-5">
            Med andra ord: <br />vi är <span className="text-[#33ABBD]">doers.</span>
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-extralight mt-4">
            Vi pratar inte. Vi gör. Vi levererar och vi får folk<br/>
            att se nya möjligheter. Varje dag, i varje projekt,<br/>
            anstränger vi oss alltid för att ge det där lilla extra.<br/>
            Och så har vi himla kul under tiden, förstås.
          </p>
        </div>
      </section>
    </>
  );
};

export default WeAreDoersSection;
