import React, { useEffect } from 'react'
import banner4 from "../assets/banner4.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration:800,
            easing: 'ease-in-out',
            delay:100,
        })
    },[])
  return (
    <section className='w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px]
    bg-cover bg-center flex flex-col justify-center items-start gap-8'
    style={{backgroundImage: `url(${banner4})`}}>
        <h1 data-aos="zoom-in" className='text-6xl text-white font-bold'>
            Lif is a combination<br></br>
            of Pizza & Magic</h1>
            <p 
            data-aos="zoom-in"
            className='text-xl text-white font-lg'>
                lorem ipsum dolor sit amet consectetuer adipisicing elit.
                <br />
                quis magni iusto odit minus hici optio ex maxime rerum provident
            </p>
            <button className='bg-orange-500 text-lg text-white px-8
            py-4 rounded-full font-semibold hover:bg-white hover:text-black
            dark:hover:bg-white dark:hover:text-black'>
                Order Now
            </button>

    </section>
  )
}

export default Hero