import React from 'react'
import home from '../assets/home.svg'
const Hero = () => {
    return (
        <div className='w-full  flex flex-col justify-between md:flex items-center '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto relative'>
                <div className='flex flex-col items-start p-0 ml-6 gap-[8px] md:mt-[150px]'>
                    <p className='text-home-color font-firma-light text-[36px] leading-[47px] md:text-left'>Increasing team <br />effectiveness by<br />understanding<br className='md:hidden' />
                        <span className='text-home font-firma-light text-[36px]  ]'> people psychology</span></p>
                    <button className='text-white px-[31px] py-[12px] w-[211px] h-[44.78px] bg-gradient-to-l from-btn-one to-btn-two rounded-[8px] font-firma font-semibold mt-[29.85px] hover:scale-105 duration-200 md:w-[300px] '>
                        Watch free lesson
                    </button>

                </div>
                <div>
                    <img src={home} alt='homeimg' className='w-[330px] mt-[48px]  md:w-[500px] left-[700px] top-[100px]' />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 '>
              <button className='text-white px-[31px] py-[12px] w-[300px] h-[80px] bg-gradient-to-l from-btn-one to-btn-two font-firma font-semibold mt-[50px] rounded-l-full'>Knowledge sessions</button>
              <button className='text-white px-[31px] py-[12px] w-[300px] h-[80px] bg-gradient-to-l from-btn-one to-btn-two rounded-l-full font-firma font-semibold mt-[10px] md:mt-[50px]'>Actionable playbooks</button>
              <button className='text-white px-[31px] py-[12px] w-[300px] h-[80px] bg-gradient-to-l from-btn-one to-btn-two rounded-l-full font-firma font-semibold mt-[10px] md:mt-[50px]'>Objective support</button>
            </div>
           
        </div>
    )
}

export default Hero