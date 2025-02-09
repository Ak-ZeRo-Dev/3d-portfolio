import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  const handleClick = () => {};
  return (
    <ul className="nav-ul ">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li" aria-label={name}>
          <a href={href} className="nav-li_a" onClick={handleClick}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-5 mx-auto c-space ">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Ak-ZeRo
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden block transition-colors"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>

        <div
          className={`
              nav-sidebar
              ${isOpen ? "max-h-screen" : "max-h-0"}`}
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
