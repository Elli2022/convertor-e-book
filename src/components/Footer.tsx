import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center w-full relative overflow-hidden flex flex-col items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20 text-white">
      <div
        className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-20 mb-8 text-sm sm:text-base md:text-lg lg:text-xl"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: 300,
          lineHeight: "20px",
        }}
      >
        <a
          href="https://convertor.se/tjanster/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Tjänster
        </a>
        <a
          href="https://convertor.se/kundcase/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Case
        </a>
        <a
          href="https://convertor.se/greenhouse/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Greenhouse
        </a>
        <a
          href="https://convertor.se/insikt/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Insikt
        </a>
        <a
          href="https://convertor.se/karriar/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Karriär
        </a>
        <a
          href="https://convertor.se/kontakt/"
          className="hover:underline"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          Kontakt
        </a>
      </div>

      <div>
       {/* Contact Information */}
       <div  className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-12 lg:space-x-8 xl:space-x-10 2xl:space-x-30 mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-left gap-4 mb-8">
       <div className="space-y-3">
        <span className="block">040-885 93 90</span>
          <span className="block">info@convertor.se</span>
        </div>
        <div className="space-y-3">
        <span className="block">Nordenskiöldsgatan 24</span>
          <span className="block">211 19 Malmö</span>
        </div>
      </div>
     

        <div className="text-center lg:text-left border-t border-gray-600 pt-4">
          <a href="https://convertor.se/">
            <img
              src="/images/Link → logo-white.png.png"
              alt="Convertor Logo"
              className="h-8 w-auto"
            />
          </a>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm md:text-base">
            Alla rättigheter reserverade © 2023 |
            <a
              href="#integritetspolicy"
              className="hover:underline text-[#32ABBC]"
            >
              Läs vår Integritetspolicy
            </a>{" "}
            |
            <a href="#installningar" className="hover:underline text-[#32ABBC]">
              Ändra dina inställningar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
