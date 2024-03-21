import React from 'react';

const WelcomeSection = () => {
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
      {/* Använd flex för att centrera innehållet vertikalt */}
      <section
        className="text-center w-full relative overflow-hidden flex items-center justify-center"
        style={{ background: '#D3E0E5', height: '503px' }}
      >
        {/* Ellipse Animation */}
        <div
          className="absolute left-1/2 top-2/5 w-32 h-32 bg-[#32ABBC] rounded-full z-0"
          style={{
            transform: 'translate(-50%, -50%)',
            animation: 'horizontal-bounce 5s ease-in-out infinite',
          }}
        />

        {/* Flex container för att hålla textinnehållet, centrering sker genom flex */}
        <div className="z-10 relative max-w-4xl mx-auto px-4">
          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">
            Välkommen till
          </h1>
          <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">
            en byrå fylld av passionerade,
          </div>
          <div
            className="text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro"
            style={{ color: '#32ABBC' }}
          >
            prestigelösa och resultatdrivna doers.
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
