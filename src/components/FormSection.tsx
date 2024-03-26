"use client";
import React, { useState } from "react";

const FormSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`E-postadress ${email} har skickats!`);
  };

  return (
    <section className="flex justify-center items-center w-full bg-[#D3E0E5] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left justify-center items-center bg-[#14243D] text-white p-4 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-6">
          Insikter från en <span className="text-[#32ABBC]">värld</span> av digital kommunikation
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <input
            type="email"
            name="email"
            placeholder="E-post"
            className="w-full px-4 py-2 text-sm text-gray-700 bg-white bg-opacity-10 rounded border-none outline-none mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="checkbox" className="mr-2 items-left" />
          <div className="w-full flex flex-col sm:flex-row justify-center items-center">
            
            <label className="text-base font-light text-left">
              Jag samtycker till att Convertor lagrar mina uppgifter och delar information om tjänster och produkter via e-post. Läs vår
              <br />
              <a href="#" className="text-[#32ABBC] ml-1">integritetspolicy</a>.
            </label>
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#32ABBC] text-white font-normal rounded py-2 px-6 sm:px-12 hover:bg-[#2799a4] transition-colors duration-200 ease-in-out"
          >
            Prenumerera
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
