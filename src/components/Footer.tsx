import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center w-full relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-[#15253E] p-8 sm:p-12 md:p-16 lg:p-20 text-white">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <a href="#tjanster" className="hover:underline">Tjänster</a>
            <a href="#case" className="hover:underline">Case</a>
            <a href="#greenhouse" className="hover:underline">Greenhouse</a>
            <a href="#insikt" className="hover:underline">Insikt</a>
            <a href="#karriar" className="hover:underline">Karriär</a>
            <a href="#kontakt" className="hover:underline">Kontakt</a>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-10">
            <div className="space-y-2">
              <span>040-885 93 90</span> <br />
              <span>info@convertor.se</span>
            </div>
            <div className="space-y-2">
              <span>Nordenskiöldsgatan 24</span> <br />
              <span>211 19 Malmö</span>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left border-t border-gray-600 pt-4">
         
         
        </div>
        <div >
           {/* Logo */}
           <a href="https://convertor.se/">
            <img src="/images/Link → logo-white.png.png" alt="Convertor Logo" className="h-8 w-auto"/>
            </a>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
            <p className="text-sm">
            Alla rättigheter reserverade © 2023 | 
            <a href="#integritetspolicy" className="hover:underline text-[#32ABBC]">Läs vår Integritetspolicy</a> | 
            <a href="#installningar" className="hover:underline text-[#32ABBC]">Ändra dina inställningar</a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
