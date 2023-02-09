import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/navLogo.png';
// import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from './Button';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};


const wrapperRef = useRef(null);
useOutsideAlerter(wrapperRef);

  return (
    <div className='fixed z-50 w-full'>

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow lg:h-[80px] md:h-[59px] sticky">
        <div className="container flex flex-wrap items-center justify-between mx-auto lg:w-[80%]">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="mr-3 sm:h-9 lg:w-[226.94px] lg:h-[23.55px] w-[70%]" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-[#0A66C2] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggle}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={toggle === false ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto'} id="navbar-default" ref={wrapperRef}>
            <ul className="flex lg:flex-rows flex-col items-center text-left p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <NavLink>
                <p className="block py-2 pl-3 pr-4 text-[#0A66C2] rounded md:bg-transparent md:text-[#0A66C2] md:p-0" aria-current="page">Home</p>
              </NavLink>
              <NavLink>
                <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">About Us</p>
              </NavLink>
              <NavLink>
                <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Contact Us</p>
              </NavLink>
              <NavLink>
                <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Patnership</p>
              </NavLink>
              <NavLink>
                <Button text={'Register'} />
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar