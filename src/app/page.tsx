'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileNav from '@/app/navbar/mobileNav'
import Hero from '@/app/hero/page';
import About from '@/app/about/page'
import Services from '@/app/services/page'
import Skils from '@/app/skills/page'
import Projects from '@/app/projects/page'
import Footer from '@/app/footer/page';
import Navbar from '@/app/navbar/page';

const Page = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, [])

  return (
    <div>
      <Navbar openNav={openNav} />
      {/* <MobileNav /> */}
      <Hero />
      <div className='relative z-[30]'>
        <About />
        <Services />
        <Skils />
        <Projects />
        <Footer />

      </div>
    </div>
  )
}

export default Page;
