import React from "react";

const Contact = () => {
    return (
        <div name='contact' className='flex flex-col justify-center items-center gap-[-8] md:flex-col w-full md:min-w-fit sm:min-w-fit lg:flex-row md:h-screen sm:h-screen mt-0  p-20 '>
            <div  className='w-full flex justify-center items-center p-4 '>
                <form method='POST' action="https://getform.io/f/285a047e-b622-41d7-a71e-e131f02f1f9d" className='flex flex-col max-w-[800px] w-full'>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <div className='flex justify-center items-center mt-5'>
                    <button className="btn">
                        SEND
                    </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;
