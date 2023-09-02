import { useState } from "react";

// icons
import { BiDownload } from "react-icons/bi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";

// my logo image and pdf 
import Resume from "../images/pdf/Ankit-CV.pdf"
import Logo from "../images/logo.png"

// navigation array
import { navigation } from "../constants";

// I took lot of inspiration of this nav bar from tailwind css, free components and make some modification
const Navbar = ({ children }) => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative lg:px-12">
      <div className="flex px-4 items-center justify-between pt-6 mx-auto max-w-2xl lg:max-w-5xl">
        <Link to="/">
          <img
            className="h-6 w-6 rounded-full"
            src={Logo}
            alt="logo-img"
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 bg-[#27272AE6] px-6 py-2 rounded-full text-sm shadow-lg ring-1 ring-white/10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`text-sm font-semibold leading-6 cursor-pointer ${pathname === item.link ? 'text-teal-500' : 'text-gray-400'} `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-2 bg-[#27272AE6] px-6 py-2 rounded-full text-sm shadow-lg ring-1 ring-white/10">
          <BiDownload className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <a href={Resume} download="Ankit-Resume" target="_blank" className="text-sm font-semibold leading-6 text-gray-400">
            Resume
          </a>
        </div>
      </div>

      {/* This is small screen menu card */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-x-4 sm:inset-x-[15rem] top-8 z-50
            origin-top rounded-3xl p-8 
            ring-1 bg-zinc-900 
          ring-zinc-800">
            <div className="flex  flex-row-reverse items-center justify-between">
              <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <XMarkIcon className="h-7 w-8" aria-hidden="true" />
              </button>
              <a href={Resume} download="Ankit-Resume" target="_blank" className="text-sm bg-[#27272ae6] rounded-full px-4 shadow-md ring-1 ring-white/10 font-semibold leading-6 text-gray-400">
                Resume
              </a>
            </div>
            {navigation.map((item) => (
              <div className="mt-6 space-y-16">
                <Link key={item.name} to={item.link}>
                  <p className="cursor-pointer">{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        {children}
      </div>
    </header>
  );
};

export default Navbar;
