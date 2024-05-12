import React from 'react'
import Skilsitems from '@/app/skills/skillitems';
import Skilslanguage from '@/app/skills/skillslanguage';

const Skils = () => {
    return (
        <div id="skills" className='pt-16 md:pt-32 pb-20 bg-[#09101a]'>
            <h1 className='heading text-center'>
                Education & <span className='text-yellow-400'>Skill</span>
            </h1><br /><br />
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
                <div>
                    <Skilsitems title="React Developer" year="2023-2024" />
                    <Skilsitems title="Mern Stack Developer" year="2023-2024" />
                    <Skilslanguage
                        Skill1='HTML'
                        Skill2='CSS'
                        Skill3='JAVASCRIPT'
                        level1='90%'
                        level2='80%'
                        level3='80%' />
                </div>
                <div>
                    <Skilsitems title="Next Js Developer" year="2023-2024" />
                    <Skilsitems title="Web Developer" year="2023-2024" />
                    <Skilslanguage
                        Skill1='REACT'
                        Skill2='NEXT JS'
                        Skill3='TYPESCRIPT'
                        level1='70%'
                        level2='70%'
                        level3='80%' />
                </div>
            </div>
        </div>
    )
}

export default Skils;
