// Skilslanguage.tsx
import React from 'react';
interface SkilslanguageProps {
  Skill1: string;
  Skill2: string;
  Skill3: string;
  level1: string;
  level2: string;
  level3: string;
}

const Skilslanguage: React.FC<SkilslanguageProps> = ({ Skill1, Skill2, Skill3, level1, level2, level3 }) => {
  return (
    <div>
      <div className=' relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {Skill1}
        </h1>
        <span className='bottom-0 h-[6px] absolute bg-[#55e6a5]' style={{ width: level1 }}></span>
      </div>
      <div className=' relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {Skill2}
        </h1>
        <span className='bottom-0 h-[6px] absolute bg-[#55e6a5]' style={{ width: level2 }}></span>
      </div>
      <div className=' relative mb-[3rem]'>
        <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
          {Skill3}
        </h1>
        <span className='bottom-0 h-[6px] absolute bg-[#55e6a5]' style={{ width: level3 }}></span>
      </div>
    </div>
  );
}

export default Skilslanguage;
