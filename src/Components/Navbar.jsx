import React, { useState } from 'react';
import { assets } from '../assets/assets'; 

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex justify-between items-center p-[20px]">
      
      {/* Logo (Left) */}
      <div className="flex justify-start w-1/3">
        <img src={assets.logo} className="w-[150px]" alt="Logo" />
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden" onClick={toggleMenu}>
        <img src={assets.menu_icon} alt="Menu Icon" className="cursor-pointer w-7" />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1abc9c] bg-opacity-100 z-50 flex flex-col items-center justify-center">
          <div className="absolute top-5 right-5">
            <img
              src={assets.close_icon} 
              alt="Close Icon"
              className="cursor-pointer w-7"
              onClick={toggleMenu}
            />
          </div>

          <ul className="flex flex-col items-center gap-8 text-white text-[24px] cursor-pointer font-medium">
            <li onClick={() => { setMenu('home'); toggleMenu(); }} className={menu === 'home' ? 'nav-active' : ''}>
              Home
            </li>
            <li onClick={() => { setMenu('menu'); toggleMenu(); }} className={menu === 'menu' ? 'nav-active' : ''}>
              Menu
            </li>
            <li onClick={() => { setMenu('mobile-app'); toggleMenu(); }} className={menu === 'mobile-app' ? 'nav-active' : ''}>
              Mobile App
            </li>
            <li onClick={() => { setMenu('contact-us'); toggleMenu(); }} className={menu === 'contact-us' ? 'nav-active' : ''}>
              Contact Us
            </li>
          </ul>

          <div className="flex flex-col items-center gap-[20px] mt-4">
            <button className="bg-transparent py-[10px] px-[30px] text-[16px] font-medium text-[#ff6347] border border-white rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-200 uppercase">
              Sign In
            </button>
          </div>
        </div>
      )}

      <div className="md:hidden flex gap-3 absolute top-6 right-28 ">
      <img src={assets.search_icon} alt="Search Icon" className="w-[24px] h-[24px] cursor-pointer" />
        <div className="relative cursor-pointer">
          <img src={assets.basket_icon} alt="Basket Icon" className="w-[24px] h-[24px]" />
          <div className="absolute top-[-8px] right-[-8px] min-h-[16px] min-w-[16px] bg-[#ff6347] text-white text-[10px] flex items-center justify-center rounded-full">
            3
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex justify-center w-1/3">
        
        <ul className="flex justify-center gap-10 text-[#49557e] text-[18px] font-medium cursor-pointer">
          <li onClick={() => setMenu('home')} className={menu === 'home' ? 'nav-active' : ''}>
            Home
          </li>
          <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'nav-active' : ''}>
            Menu
          </li>
          <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'nav-active' : ''}>
            Mobile App
          </li>
          <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'nav-active' : ''}>
            Contact Us
          </li>
        </ul>
      </div>

      {/* Right-hand side icons and buttons */}
      <div className="hidden md:flex justify-end items-center gap-[20px] w-1/3">
        <img src={assets.search_icon} alt="Search Icon" className="w-[24px] h-[24px] cursor-pointer" />
        <div className="relative cursor-pointer">
          <img src={assets.basket_icon} alt="Basket Icon" className="w-[24px] h-[24px]" />
          <div className="absolute top-[-8px] right-[-8px] min-h-[16px] min-w-[16px] bg-[#ff6347] text-white text-[10px] flex items-center justify-center rounded-full">
            3
          </div>
        </div>
        <button className="bg-transparent py-[10px] px-[30px] text-[16px] font-medium text-[#49557e] border border-[#ff6347] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-200 uppercase">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
