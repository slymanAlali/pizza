import React from 'react'
import { FaFacebook, FaInstagram,FaTwitter, FaYoutube ,FaSun} from 'react-icons/fa6';
import { FaMoon } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import {Link} from 'react-scroll'
import { useDarkMode } from './DarkModeContext';

const Footer = () => {

  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <>
    <section className={`${darkMode
      ? 'dark:bg-gray-900' : 
      'light bg-black'} w-full lg:px-20 px-10 lg:py-10 w-full
      h-fit flex flex-col justify-center items-center gap-6`}>
        <h1 className='text-white font-bold text-5xl'>Pizza
        <span className='text-orange-500 italic'>Hot</span>
        </h1>
        <p className='text-xl text-slate-100 text-center'>
        lorem ipsum dolor sit amet consectetuer adipisicing elit.
        </p>
        <div className='flex justify-center items-center gap-4'>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white
          hover:text-black cursor-pointer transform hover:scale-105
          transition-transform duration-300'>
            <FaFacebook className='w-[25px] h-[25px]' />
          </div>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white
          hover:text-black cursor-pointer transform hover:scale-105
          transition-transform duration-300'>
            <FaInstagram className='w-[25px] h-[25px]' />
          </div> <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white
          hover:text-black cursor-pointer transform hover:scale-105
          transition-transform duration-300'>
            <FaTwitter className='w-[25px] h-[25px]' />
          </div> <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white
          hover:text-black cursor-pointer transform hover:scale-105
          transition-transform duration-300'>
            <FaYoutube className='w-[25px] h-[25px]' />
          </div>
          </div>
          </section>
          <div>
            <button onClick={toggleDarkMode} 
            className='flex items-center p-4 rounded-full bg-orange-500 fixed
            lg:bottom-6 left-6 bottom-6'>
              {darkMode ? <FaMoon size={30} className='text-black'/> : <FaSun size={30}/>}
            </button>
            </div>
            {/* scroll to top button */}
            <div className='bg-orange-500 text-black p-3 rounded-full
            hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
              <Link to='hero' spy={true} offset={-100} smooth={true}>
                <FaArrowUp className='w-[35px] h-[35px]' />
              </Link>

            </div>
          </>
  )
}

export default Footer