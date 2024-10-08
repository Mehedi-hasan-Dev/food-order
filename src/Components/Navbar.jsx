import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Assuming assets contain icons like logo, search_icon, and basket_icon

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu on small screens

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex justify-between items-center p-[20px]">
      {/* Logo */}
      <img src={assets.logo} className="w-[150px]" alt="Logo" />

      {/* Hamburger Menu Button for Small Screens */}
      <div className="md:hidden" onClick={toggleMenu}>
        <img src={assets.menu_icon} alt="Menu Icon" className="cursor-pointer w-7" />
      </div>

      {/* Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1abc9c] bg-opacity-100 z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <div className="absolute top-5 right-5">
            <img
              src={assets.close_icon} // Make sure to add a close icon to your assets
              alt="Close Icon"
              className="cursor-pointer w-7"
              onClick={toggleMenu}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center gap-8 text-white text-[24px] font-medium">
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


          {/* Icons and Button */}
          <div className="flex flex-col items-center gap-[20px] mt-4">
            <div className="flex gap-6 ">
              {/* Search Icon */}
            <img src={assets.search_icon} alt="Search Icon" className="w-[24px] h-[24px] cursor-pointer" />

{/* Basket Icon with Notification Badge */}
              <div className="relative cursor-pointer">
              <img src={assets.basket_icon} alt="Basket Icon" className="w-[24px] h-[24px]" />
             <div className="absolute top-[-8px] right-[-8px] min-h-[16px] min-w-[16px] bg-[#ff6347] text-white text-[10px] flex items-center justify-center rounded-full">
    3
  </div>
</div>
            </div>

            {/* Sign In Button */}
            <button className="bg-transparent py-[10px] px-[30px] text-[16px] font-medium text-[#ff6347] border border-white rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-200 uppercase">
              Sign In
            </button>
          </div>
        </div>
      )}
      
      {/* Links, Icons, and Button for Medium Screens and Up */}
      <div className={`md:flex items-center gap-[20px] text-[#49557e] text-[18px] font-medium cursor-pointer hidden`}>
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-[20px]">
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

        {/* Icons and Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[20px] mt-4 md:mt-0 ">
          {/* Search Icon */}
          <img src={assets.search_icon} alt="Search Icon" className="w-[24px] h-[24px] cursor-pointer" />

          {/* Basket Icon with Notification Badge */}
          <div className="relative cursor-pointer">
            <img src={assets.basket_icon} alt="Basket Icon" className="w-[24px] h-[24px]" />
            <div className="absolute top-[-8px] right-[-8px] min-h-[16px] min-w-[16px] bg-[#ff6347] text-white text-[10px] flex items-center justify-center rounded-full">
              3
            </div>
          </div>

          {/* Sign In Button */}
          <button className="bg-transparent py-[10px] px-[30px] text-[16px] font-medium text-[#49557e] border border-[#ff6347] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-200 uppercase">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
