import React from "react";
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {

    return(
        <div name='home' className=' w-full h-screen flex flex-col justify-center items-center '>
            <div className="ms-10 my-10 lg:text-7xl font-extrabold md:text-5xl sm:text-4xl  overflow-hidden ">
                <span className="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent"> Hi, My Name Is ARYANA  </span>
            </div>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/aryana-rasteh-452b44294/'
                        >
                            Linkedin <FaLinkedin size={50} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/aryanadev'
                        >
                            Github <FaGithub size={50} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://docs.google.com/document/d/1sZYe8-xcO4cVWOC_rFqdflFLLrzErEIJqXQNHb1sTEU/edit?usp=sharing'
                        >
                            Resume <BsFillPersonLinesFill size={50} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-center mx-auto md:flex-row md:h-auto'>
                <main id="container">

                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="dots2">
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div className="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                    </div>
                    <div class="circle"></div>
                </main>
            </div>
        </div>
    )
}

export default Home;
