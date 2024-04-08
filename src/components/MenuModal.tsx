import Link from "next/link";

const MenuModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  
  if (!isOpen) return null;

  return (
    <div
    className="fixed inset-0 z-50 bg-[#14243DE6]/30 p-5 flex flex-col items-center justify-center"

    onClick={onClose}
    >
          {/* Close Icon */}
<button
  className="absolute top-1 right-5 text-white z-10"
  onClick={onClose}
  aria-label="Close menu"
  style={{ fontSize: "64px" }} 
>
  &times;
</button>

      {/* Menu Content */}
      <ul
        id="menu-main"
        className="menu cf w-full flex flex-col items-center justify-center space-y-10"

        style={{
          padding: "12% 0 0",
          margin: 0,
          background: "rgba(20, 36, 61, .9)",
          height: "100vh",
          width: "100%",
          position: "absolute",
        }}
      >
        {/* Menu Items */}
        <li className="menu-item menu-item-has-children ">
          <ul className="sub-menu cursor-pointer">
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/"
                className="text-white font-font-medium text-sm leading-loose w-full text-center py-2 "
                >
                TJÄNSTER
              </a>
            </li>
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/kundcase/"
                className="text-white font-medium text-sm leading-loose w-full text-center py-2"
              >
                CASE
              </a>
            </li>
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/greenhouse/"
                className="text-white font-medium text-sm leading-loose w-full text-center py-2"
              >
                GREENHOUSE
              </a>
            </li>
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/insikt/"
                className="text-white font-medium text-sm leading-loose w-full text-center py-2"
              >
                INSIKT
              </a>
            </li>
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/karriar/"
                className="text-white font-medium text-sm leading-loose w-full text-center py-2"
              >
                KARRIÄR
              </a>
            </li>
            <li className="menu-item mb-3">
              <a
                href="https://convertor.se/kontakt/"
                className="text-white font-medium text-sm leading-loose w-full text-center py-2"
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuModal;
