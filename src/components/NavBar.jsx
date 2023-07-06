import React, { useState } from "react";

const Navbar = ({ logo }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-white bg-opacity-90 lg:py-2 py-0.5 sticky top-0 z-50 lg:px-4 px-8 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <a className="flex-shrink-0 " href="/">
            <img className="h-14 w-auto" src={logo} alt="Logo Boma" />
          </a>

          {/* Navigation buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="space-x-4 text-slate-600">
                <a
                  href="/"
                  className=" hover:bg-main hover:text-white px-3 py-2 rounded-md text-lg font-normal"
                >
                  Beranda
                </a>
                <a
                  href="/tentang-kami"
                  className=" hover:bg-main hover:text-white px-3 py-2 rounded-md text-lg font-normal"
                >
                  Tentang Kami
                </a>
                <a
                  href="/pengurus"
                  className=" hover:bg-main hover:text-white px-3 py-2 rounded-md text-lg font-normal"
                >
                  Pengurus
                </a>
                <a
                  href="/artikel"
                  className=" hover:bg-main hover:text-white px-3 py-2 rounded-md text-lg font-normal"
                >
                  Artikel
                </a>
                <a
                  href="/kegiatan"
                  className=" hover:bg-main hover:text-white px-3 py-2 rounded-md text-lg font-normal"
                >
                  Kegiatan
                </a>
              </div>
            </div>
          </div>

          {/* Responsive menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-main-900 inline-flex items-center justify-center p-2 rounded-md text-main-400 hover:text-white hover:bg-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-main-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive menu */}
      <div
        className={`${
          isMenuOpen
            ? "z-50 fixed bg-white bg-opacity-90 right-0 text-right"
            : "hidden"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-1 pb-2 space-y-1 sm:px-3">
          <a
            href="/"
            className=" hover:bg-main hover:text-white block px-3 py-2 rounded-md text-base font-normal"
          >
            Beranda
          </a>
          <a
            href="/tentang-kami"
            className=" hover:bg-main hover:text-white block px-3 py-2 rounded-md text-base font-normal"
          >
            Tentang Kami
          </a>
          <a
            href="/pengurus"
            className=" hover:bg-main hover:text-white block px-3 py-2 rounded-md text-base font-normal"
          >
            Pengurus
          </a>
          <a
            href="/artikel"
            className=" hover:bg-main hover:text-white block px-3 py-2 rounded-md text-base font-normal"
          >
            Artikel
          </a>
          <a
            href="/kegiatan"
            className=" hover:bg-main hover:text-white block px-3 py-2 rounded-md text-base font-normal"
          >
            Kegiatan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
