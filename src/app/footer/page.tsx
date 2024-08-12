import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#02050a] py-[4rem]'>
      <hr />
      <br />
      <div className='w-[90%] mx-auto flex flex-wrap justify-between'>
        <div className='w-full md:w-[30%] mb-[2rem] md:mb-0'>
          <h1 className='text-[25px] font-semibold text-white'>Address</h1>
          <p className='text-[17px] text-white opacity-68'>
            City Railway colony Near II Chandigrah Road Karachi
          </p>
        </div>
        <div className='w-full md:w-[30%] mb-[2rem] md:mb-0'>
          <h1 className='text-[25px] font-semibold text-white'>Phone</h1>
          <p className='text-[17px] text-white opacity-68'>
            03145797941 <br /> 03032260380
          </p>
        </div>
        <div className='w-full md:w-[30%]'>
          <h1 className='text-[25px] font-semibold text-white'>Send Us Email</h1>
          <p className='text-[17px] text-white opacity-68'>Itxkhaskheli@gmail.com</p>
        </div>
      </div>
      <br />
      <hr />
      <div className='w-[90%] mx-auto text-center mt-[2rem]'>
        <p className='text-[18px] text-white opacity-20'>
          Naeem-2023 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
