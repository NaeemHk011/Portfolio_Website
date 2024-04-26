'use client'
import React, { useEffect } from 'react'
// import Particle from "./Particle"
// import TextEffect from './TextEffect';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';


import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import TextEffect from '@/app/TextEffect';
import Particles from '@/app/Particles';

const Hero = () => {

  useEffect(() => {
    const handleClick = () => {
      const cvUrl = '/images/NaeemCV.pdf';
      const downloadLink = document.createElement('a');
      downloadLink.href = cvUrl;
      downloadLink.download = 'Naeem_Hussain_CV.pdf';
      downloadLink.click();
    };

    const downloadButton = document.getElementById('downloadButton');
    downloadButton?.addEventListener('click', handleClick);
    return () => {
      downloadButton?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id="hero" className="h-[110vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particles />
      <div className='w-[90%]  grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[10rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I'M <span className='text-yellow-400'>NAEEM!</span></h1>

          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            a passionate web developer with a focus on creating engaging and user-friendly websites. With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations. Let's collaborate to turn your vision into reality!
          </p>
          <div className='mt-[2rem] flex-col space-y-3 sm:flex sm:flex-row item-center sm:space-x-6'>
            <button id='downloadButton' className='px-[1.5rem] rounded-full hover:bg-yellow-400 transition-all duration-200 py-[0.3rem] text-[12px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-3'>
              <p>Download-CV</p>
              <ArrowDownTrayIcon className="w-[1.2rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className='w-[400px] hidden bg-[#55e6a5] relative lg:flex item-center rounded-full h-[400px] '>
          <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
