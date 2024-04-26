
import React from 'react'
import Image from 'next/image';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/20/solid';
const Blog = () => {
    return (
        <div id="blog" className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <h1 className='heading'>MY <span className='text-yellow-400'>BLOG</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src="/images/blog3.jpg" alt="blog" layout="fill" className="object-contain" />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            Dec 10,2023
                        </div>
                        <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                            <div className='flex item space-x-3'>
                                <UserCircleIcon className="w-[1rem] mx-auto h-[1rem] text-[#55e6a5]" />
                                <p className='text-white text-[14px]'>by Naeem</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1rem] mx-auto h-[1rem] text-[#55e6a5]' />
                                <p className='text-white text-[14px]'>(12)</p>
                            </div>

                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semribold'>Next JS Frontend Development</p>
                    </div>
                </div>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src="/images/blog2.jpg" alt="blog" layout="fill" className="object-contain" />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            Jan 1,2024
                        </div>
                        <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                            <div className='flex item space-x-3'>
                                <UserCircleIcon className="w-[1rem] mx-auto h-[1rem] text-[#55e6a5]" />
                                <p className='text-white text-[14px]'>by Naeem</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1rem] mx-auto h-[1rem] text-[#55e6a5]' />
                                <p className='text-white text-[14px]'>(6)</p>
                            </div>

                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semribold'>Next JS Backend Development</p>
                    </div>
                </div>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src="/images/blog1.jpg" alt="blog" layout="fill" className="object-contain" />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            Mar 9,2024
                        </div>
                        <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                            <div className='flex item space-x-3'>
                                <UserCircleIcon className="w-[1rem] mx-auto h-[1rem] text-[#55e6a5]" />
                                <p className='text-white text-[14px]'>by Naeem</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1rem] mx-auto h-[1rem] text-[#55e6a5]' />
                                <p className='text-white text-[14px]'>(3)</p>
                            </div>

                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semribold'>Next Js Fullstack Development</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Blog