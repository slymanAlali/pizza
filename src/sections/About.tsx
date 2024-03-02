/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import about1 from "../assets/about1.jpg";
import Aos from 'aos';
import { useDarkMode } from './DarkModeContext';

const About = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration:800,
            easing: 'ease-in-out',
            delay:100,
        })
    },[])

    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <>
    <section id="about" className={`${darkMode
    ? 'dark:bg-black' : 
    'light bg-white'} w-full lg:px-20 px-10 lg:py-20 px-10y
    h-fit grid lg:grid-cols-4 justify-center gap-10`}>
     <div data-aos="zoom in" data-aos-delay="200"
      className='border-[4px] border-orange-600 dark:bg-orange-400 p-14 flex flex-col
      justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer'>
        <img src={icon1} alt="" className='w-[80px] h-[80px] transform hover:scale-105
        transition-transform duration-300 cursor-pointer' />
        <h1 className='text-black text-2xl font-lg text-center'>About Us</h1>
        </div>
        <div data-aos="zoom in" data-aos-delay="200"
      className='border-[4px] border-orange-600 dark:bg-orange-400 p-14 flex flex-col
      justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer'>
        <img src={icon2} alt="" className='w-[80px] h-[80px] transform hover:scale-105
        transition-transform duration-300 cursor-pointer' />
        <h1 className='text-black text-2xl font-lg text-center'>ORGANIC</h1>
        </div> <div data-aos="zoom in" data-aos-delay="200"
      className='border-[4px] border-orange-600 dark:bg-orange-400 p-14 flex flex-col
      justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer'>
        <img src={icon3} alt="" className='w-[80px] h-[80px] transform hover:scale-105
        transition-transform duration-300 cursor-pointer' />
        <h1 className='text-black text-2xl font-lg text-center'>PIZZA</h1>
        </div> <div data-aos="zoom in" data-aos-delay="200"
      className='border-[4px] border-orange-600 dark:bg-orange-400 p-14 flex flex-col
      justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer'>
        <img src={icon4} alt="" className='w-[80px] h-[80px] transform hover:scale-105
        transition-transform duration-300 cursor-pointer' />
        <h1 className='text-black text-2xl font-lg text-center'>PASTA</h1>
        </div> 

    </section>
    <section className={`${darkMode ? 'dark:bg-black' : 'light bg-white'}
    w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1
    justify-center items-center gap-10`}>
      <div>
        <img
        data-aos="zoom-in"
        src={about1} alt="about image"
        className='lg:w-[800px] lg:h-[600px] rounded-xl'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-8'>
        <h1 className='text-2xl text-black dark:text-white
        font-semibold text-center'>WELCOME TO</h1>
        <h1 className='text-6xl text-black dark:text-white
        font-bold text-center'>Pizza Pies</h1>
        <p
        data-aos="zoom-in"
        className='text-xl text-slate-800
        dark:text-slate-100 text-center'
        >lorem ipsum dolor sit amet consectetuer adipisicing elit.
          quis magni iusto odit minus hici optio ex maxime rerum provident
          </p>
          <button
          data-aos="flip-up"
          className='bg-orange-500 text-lg text-white
          px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black'
          >Order Now</button>
      </div>
    </section>
    </>
  )
}

export default About


