
import React from "react";
import tailwind from '../Assets/tailwind.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import react from '../Assets/react.png'
import javascript from '../Assets/javascript.png'
import nextjs from '../Assets/nextjs.svg'
import Bootstrap from '../Assets/Bootstrap.svg'
import Typescript from '../Assets/Typescript.png'

const Skills = () => {
    return (
        <div name='skills' className='flex justify-center items-center w-full md:h-screen mx-auto md:min-w-fit sm:grid-cols-2'>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-1 p-2 mb-32 w-10/12  max-w-[1000px]">
                <div className="flex flex-col items-center">
                    <img src={html} alt="HTML Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">HTML</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={css} alt="CSS Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={javascript} alt="JavaScript Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={react} alt="React Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">React</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={github} alt="GitHub Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">GitHub</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={tailwind} alt="Tailwind CSS Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={nextjs} alt="Tailwind CSS Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">Next JS</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Bootstrap} alt="Tailwind CSS Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">Bootstrap </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Typescript} alt="Tailwind CSS Logo" className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-4 max-w-[170px] w-full" />
                    <p className="text-white mt-4">Typescript </p>
                </div>
            </div>
        </div>
    )
}

export default Skills ;