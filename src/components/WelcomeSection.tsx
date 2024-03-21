// src/components/WelcomeSection.tsx

import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-[#D3E0E5] text-center py-16 w-full relative">
      {/* Ellipse Animation */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-38 h-38 bg-blue-200 rounded-full animate-bounce-slow" />
      
      {/* Text Container */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-century-gothic-pro text-black">
          Välkommen till
        </h1>
        <div className="mt-2 text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro text-black">
          en byrå fylld av passionerade,
        </div>
        <div className="text-lg md:text-xl lg:text-3xl font-bold font-century-gothic-pro" style={{ color: '#32ABBC' }}>
          prestigelösa och resultatdrivna doers.
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
