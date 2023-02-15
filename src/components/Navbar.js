import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/navLogo.png';
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
            {toggle ?

              <svg className="w-6 h-6" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10.7795" y="10" width="20.0079" height="20" rx="10" fill="#0A66C2" />
                <path d="M17.4467 24C17.3148 24 17.1858 23.9608 17.0761 23.8875C16.9663 23.8142 16.8808 23.7099 16.8303 23.588C16.7798 23.4661 16.7666 23.3319 16.7924 23.2025C16.8181 23.0731 16.8816 22.9542 16.9749 22.8608L23.6484 16.1873C23.7743 16.0658 23.9429 15.9985 24.1178 16C24.2928 16.0015 24.4602 16.0717 24.5839 16.1955C24.7077 16.3192 24.7779 16.4866 24.7794 16.6616C24.7809 16.8365 24.7136 17.0051 24.5921 17.131L17.9186 23.8045C17.8567 23.8665 17.7831 23.9158 17.7022 23.9493C17.6212 23.9829 17.5344 24.0001 17.4467 24Z" fill="white" />
                <path d="M24.1202 24C24.0326 24.0001 23.9458 23.9829 23.8648 23.9493C23.7839 23.9158 23.7103 23.8665 23.6484 23.8045L16.9749 17.131C16.8534 17.0051 16.7861 16.8365 16.7876 16.6616C16.7891 16.4866 16.8593 16.3192 16.9831 16.1955C17.1068 16.0717 17.2742 16.0015 17.4491 16C17.6241 15.9985 17.7927 16.0658 17.9186 16.1873L24.5921 22.8608C24.6854 22.9542 24.7489 23.0731 24.7746 23.2025C24.8004 23.3319 24.7872 23.4661 24.7367 23.588C24.6862 23.7099 24.6007 23.8142 24.4909 23.8875C24.3812 23.9608 24.2522 24 24.1202 24Z" fill="white" />
              </svg>

              :


              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

            }

          </button>
          <div className={toggle === false ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto'} id="navbar-default" ref={wrapperRef}>
            <ul className="flex lg:flex-rows flex-col items-center text-left p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <NavLink>
                <p className="block py-2 pl-3 pr-4 text-[#0A66C2] rounded md:bg-transparent md:text-[#0A66C2] md:p-0" aria-current="page">Home</p>
              </NavLink>
              {/* <NavLink> */}
              <a href='#about' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">About Us</a>
              {/* </NavLink> */}
              {/* <NavLink> */}
              <a href='#partnership' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Patnership</a>
              {/* </NavLink> */}
              {/* <NavLink> */}
              <a href='#contact' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Contact Us</a>
              {/* </NavLink> */}
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