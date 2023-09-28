import React from "react";
import Item1 from '../Assets/Item1.jpg'

const About = () => {
    return(
        <div className='w-full h-screen mb-[200px] md:min-w-fit sm:min-w-fit '>
            <div name='about'  className="flex flex-col  md:flex-col lg:flex-row  md:h-auto  p-36 justify-center items-center">
                <div className="md:w-1/2 ">
                    <img src={Item1} alt="Portfolio Item"  className="w-full" />
                </div>
                <div className="md:w-1/2 p-4 mt-4 md:mt-0">
                    <p className=" font-semibold mt-0 md:mt-5 text-white text-2xl md:text-2xl">
                        Crafting Seamless Digital Experiences:
                        <span className="block text-white font-semibold text-left w-5/6">
                        Aryana's Front-End Development Journey
                    </span>
                    </p>
                    <br/>
                    <p className="text-white font-semibold justify-start text-left text-sm md:text-sm overflow-hidden">
                        Greetings! I'm Aryana, a passionate front-end developer from Iran. In the past two years, I've been creating intuitive user experiences using React, JavaScript, HTML, CSS, TypeScript, and leveraging the power of Tailwind CSS. I'm dedicated to crafting visually stunning and robust websites. Let's create memorable online experiences together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
