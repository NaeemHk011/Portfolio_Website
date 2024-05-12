import React, { useState } from "react";
import { Link } from 'react-scroll';

import MobileNav from '@/app/navbar/mobileNav'; // Assuming MobileNav is in a separate file
import { Bars3Icon } from "@heroicons/react/24/solid";


interface Props {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50 bg-[#141c27] shadow-md">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between flex-wrap h-14">
                        <h1 className="text-2xl sm:text-lg text-white font-bold font-poppins">FRONT<span className="text-yellow-300"> END-DEV</span></h1>
                        <div className="hidden md:flex  flex-wrap space-x-4 md:w-auto md:z-auto w-screen md:static absolute">
                            <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-white hover:text-yellow-300  ">HOME</Link>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-white hover:text-yellow-300">ABOUT</Link>
                            <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-white hover:text-yellow-300">SERVICES</Link>
                            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-white hover:text-yellow-300">PROJECTS</Link>
                            <Link to="clientReviews" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-white hover:text-yellow-300">REVIEWS</Link>
                        </div>
                        <div className="md:hidden">
                            <Bars3Icon className="w-6 h-6 text-yellow-300 cursor-pointer" onClick={toggleNav} />
                        </div>
                    </div>
                </div>
            </div>
            {navOpen && <MobileNav nav={navOpen} closeNav={toggleNav} />}
        </>
    );
}

export default Navbar;
