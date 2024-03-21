import Link from "next/link";

const MenuModal = ({ isOpen, onClose}: { isOpen: boolean, onClose: () => void }) => {
    if(!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 bg-[#14243DE6] p-5 flex flex-col" onClick={onClose}>
        {/* Close Icon */}
        <button className="self-end text-white text-3xl p-2" onClick={onClose}>&times;</button>
            
            {/* Menu Content */}
            <ul id="menu-main" className="menu cf" style={{padding: '12% 0 0', margin: 0, background: 'rgba(20, 36, 61, .9)', height: '100vh', width: '100%'}}>
              {/* Menu Items */}
              <li className="menu-item menu-item-has-children">
                <a className="text-white">Tjänster</a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="https://convertor.se/tjanster/strategi/" className="text-white">Strategi</a></li>
                  <li className="menu-item"><a href="https://convertor.se/tjanster/teknik/" className="text-white">Teknik</a></li>
                  <li className="menu-item"><a href="https://convertor.se/tjanster/marknadsforing/" className="text-white">Marknadsföring</a></li>
                  <li className="menu-item"><a href="https://convertor.se/tjanster/data-analys/" className="text-white">Data & Analys</a></li>
                </ul>
              </li>
              {/* More Menu Items */}
              <li className="menu-item"><a href="https://convertor.se/kundcase/" className="text-white">Case</a></li>
              {/* Add other menu items as needed */}
            </ul>
          </div>
       
      );
    };
    
    export default MenuModal;