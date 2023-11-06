import React, { useState } from 'react';
import logo1 from '../Assets/logo1.png';
import { Link } from 'react-scroll';

const Nav = () => {


    let [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav name='navbar' className="bg-[#242424] border-gray-200 w-full top-0 left-0  ">
            <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 px-1 ">
                <img src={logo1} className="w-[100px] h-[100px] bg-[#242424] mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-dropdown"
                    aria-expanded={open}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`bg-[#242424] w-full md:block md:w-auto ${open ? 'block' : 'hidden'}`} id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 text-[#3182ce] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#242424] bg-[#242424]">
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pl-3 pr-4 text-[#F9F871] rounded hover:bg-[#EFB200] md:hover:bg-transparent md:border-0 md:hover:text-[#EFB200] md:p-0 bg-[#242424]">HOME</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pl-3 pr-4 text-[#00FFFF] rounded hover:bg-[#2119bf] md:hover:bg-transparent md:border-0 md:hover:text-[#13c7eb] md:p-0 bg-[#242424]">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pl-3 pr-4 text-[#F9F871] rounded hover:bg-[#EFB200] md:hover:bg-transparent md:border-0 md:hover:text-[#EFB200] md:p-0 bg-[#242424]">SKILLS</Link>
                        </li>
                        <li>
                            <Link to="resume" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pl-3 pr-4 text-[#00FFFF] rounded hover:bg-[#2119bf] md:hover:bg-transparent md:border-0 md:hover:text-[#13c7eb] md:p-0 bg-[#242424]">RESUME</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pl-3 pr-4 text-[#F9F871] rounded hover:bg-[#EFB200] md:hover:bg-transparent md:border-0 md:hover:text-[#EFB200] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;