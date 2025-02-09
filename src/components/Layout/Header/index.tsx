"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/60 ${sticky ? "shadow-lg bg-white" : "shadow-none bg-white"}`}
    >
      <div className="lg:py-0 py-0.5">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <div
            className={`pr-6 lg:pr-12 border-r border-black/60 duration-300 ${sticky ? "py-1.5" : "py-3 lg:py-4"}`}
          >
            <Logo />
          </div>
          <nav className="hidden lg:flex flex-grow items-center gap-6 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div
            className={`flex items-center gap-3 duration-300 ${sticky ? "py-1.5" : "py-3 lg:py-4"}`}
          >
            <button
              className="bg-primary text-white hover:bg-blue-700 border border-primary px-2.5 py-1 text-sm lg:px-3.5 lg:py-1.5 rounded-lg transition-all duration-300"
              onClick={() => {
                // You can handle booking call functionality here
                alert("Book a Call clicked!");
              }}
            >
              Book a Call
            </button>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                icon={navbarOpen ? "ion:close" : "ion:menu"} 
                className="w-5 h-5 text-gray-800"
              />
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setNavbarOpen(false)}
          />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-[280px] z-50 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <Icon icon="ion:close" className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-6 flex flex-col space-y-4 w-full">
              <Link
                href="#"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center transition-colors duration-200"
                onClick={() => {
                  alert("Mobile Book a Call clicked!");
                  setNavbarOpen(false);
                }}
              >
                Book a Call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
