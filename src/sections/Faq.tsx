/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { useDarkMode } from './DarkModeContext';
import faqimg1 from "../assets/faq1.jpg"
import faqimg2 from "../assets/faq2.jpg"
import faqimg3 from "../assets/faq3.jpg"
import faqimg4 from "../assets/faq4.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Accordion } from 'flowbite-react';


const Faq = () => {
  useEffect(() => {
    Aos.init({
        offset: 200,
        duration:800,
        easing: 'ease-in-sine',
        delay:100,
    })
},[])

const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <section id="faq" className={`${darkMode
      ? 'dark:bg-black' : 
      'light bg-white'} w-full lg:px-20 px-10 lg:py-20 px-1y
       grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-14`}>
        <div className='flex flex-col justify-center items-center gap-12'>
          <h1
          data-aos='zoom-in'
          className='text-6xl text-black font-bold text-center'
          >Frequently Asked Questions</h1>
          <div data-aos='slide-up'className='w-full'>
          <Accordion className='flex flex-col justify-center items-center gap-2'>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='border-none text-black text-lg'>
          What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          lorem ipsum dolor sit amet consectetuer adipisicing elit.</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
          </div>
          <button
          className='bg-orange-500 text-lg font-semibold py-4 px-8
          rounded-full hover:bg-black
          hover:text-white dark:hover:bg-white dark:hover:text-black
          '>Contact us
          </button>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 justify-center
        items-center gap-4'
         id='image box'>
          <img src={faqimg1} alt="" className='w-[400px] h-[400px] rounded-xl' />
          <img src={faqimg2} alt="" className='w-[400px] h-[400px] rounded-xl' />
          <img src={faqimg3} alt="" className='w-[400px] h-[400px] rounded-xl' />
          <img src={faqimg4} alt="" className='w-[400px] h-[400px] rounded-xl' />
        </div>
       </section>
  )
}

export default Faq