import Link from "next/link";

const MenuModal = ({ isOpen, onClose}: { isOpen: boolean, onClose: () => void }) => {
    if(!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
              <a href="https://convertor.se/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">TJÄNSTER</a>
            <a href="https://convertor.se/kundcase/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">CASE</a>
            <a href="https://convertor.se/greenhouse/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">GREENHOUSE</a>
            <a href="https://convertor.se/insikt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">INSIKT</a>
            <a href="https://convertor.se/karriar/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KARRIÄR</a>
            <a href="https://convertor.se/kontakt/" className="text-custom-blue font-century-gothic-pro uppercase text-xs font-bold leading-tight hover:text-gray-300 py-2 px-3">KONTAKT</a>
              </div>
              <div className="mt-5 sm:mt-6">
                <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-custom-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default MenuModal;