import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="text-2xl font-bold">BrandLogo</div>

      <button
        className="block md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav
        className={`absolute z-50 top-16 left-0 w-full bg-gray-800 md:static md:flex md:gap-6 md:bg-transparent md:top-0 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-0 md:ml-auto">
          {["Home", "Shop", "Contact", "Cart"].map((el) => (
            <li key={el} className="cursor-pointer">
              {el}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
