import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div id="projects" className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                Pro<span className='text-yellow-400'>Jects</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>

                <div>
                    <a href="https://text-ai-5.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/ai.jpg" alt="Conetent generator Ai" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://draggable-cards-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/dragable.png" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://chatgpt.com/g/g-W5uml2hdd-interview-success-mentor" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/gpt.png" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://xfashion-shop.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p1.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://github.com/NaeemHk011/Project-2_ATM" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p2.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/NaeemHk011/Project-Countdown_timer" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p3.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/NaeemHk011/Project_Quiz" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p4.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/NaeemHk011/Project_Adventure_game" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p5.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/NaeemHk011/Number_Guessing_Game" target="_blank" rel="noopener noreferrer">
                        <div data-aos='fade-up' data-aos-delay='500' className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] '>
                            <Image src="/images/p6.jpg" alt="portfolio" layout="fill" className="object-contain" />
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Projects