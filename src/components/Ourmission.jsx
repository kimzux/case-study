import React from 'react'
import mission from '../assets/mission.svg'
import fire from '../assets/fire.svg'
import ico from '../assets/ico.svg'
import fone from '../assets/fone.svg'
import ftwo from '../assets/ftwo.svg'
import fthree from '../assets/fthree.svg'
import ffour from '../assets/ffour.svg'
import fsix from '../assets/fsix.svg'
import fseven from '../assets/fseven.svg'
import image from '../assets/image.svg'

const Ourmission = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between  mt-9 md:flex  '>
            <div className='grid md:grid-cols-2 max-w-[1240px] relative'>
                <div className='flex flex-col items-start p-0 ml-[80px] gap-[8px] md:mt-[100px]'>
                    <img src={mission} alt='for mission' className='md:w-[500px]' />
                </div>
                <div className='md:mt-[100px]'>
                    <h5 className='text-[24px] font-firma-light text-left ml-[70px] mt-[30px]'>Unlock the power of people <br className='md:hidden' /> for a stress-free work <br className='md:hidden' /> environment </h5>
                    <div className='font-firma-medium mt-[50px] ml-[70px] text-[16px] text-left'>
                        <p className='leading-[20px]'>
                            Employee management in today's <br className='md:hidden' /> workplace can be difficult if you don't <br className='md:hidden' /> understandwhy people act the way they do  <br className='md:hidden' />  and what drives and motivates them.
                        </p>
                        <p className='mt-6 text-'>Yudimy’s People Management Accelerator  <br className='md:hidden' />  (PMA) is an immersive accelerator that helps managers, leaders and people operators  <br className='md:hidden' />  develop effective people management skills by understanding people psychology.
                        </p>
                    </div>


                </div>
            </div>
            <div className='flex  relative mt-[20px] md:justify-center '>
                <div className='grid md:grid-cols-4 ml-[70px] relative md:flex'>
                    <div>
                        <h5 className='text-[24px] font-firma-light mt-[30px] inline-block'>Who</h5>
                        <h5 className='text-[24px] font-firma-light'> is this for? </h5>
                        <p className='mt-[10px]'>A talent accelerator to <br /> reduce people management <br /> headaches</p>
                    </div>

                    <div className='md:ml-[200px]'>
                        <img src={ico} className='w-[32px] mt-[20px]' alt="icon" />
                        <div>
                            <span>Team Leads
                                <br />Line Managers</span>
                        </div>

                    </div>
                    <div className='md:ml-[200px]'>
                        <img src={ico} className='w-[32px] mt-[20px]' alt="icon" />
                        <div>
                            <span>Product Managers
                                <br />Head of Businesses</span>
                        </div>

                    </div>
                    <div className='md:ml-[200px]'>
                        <img src={ico} className='w-[32px] mt-[20px]' alt='profile' />
                        <div>
                            <span>COOs
                                <br />Hr Proffessionals</span>
                        </div>

                    </div>

                </div>
                <img src={fire}
                    className='mb-[10px] w-[50px] absolute left-[115px] top-[18px] md:left-[260px]' alt="fire-icon" />
            </div>
            <div className='flex ml-[70px] mt-[30px] relative'>
                <p className='text-[24px] font-firma-light'>The value of understanding <br /> people psychology in the <br className='md:hidden' /> workplace.</p>
                <div className='absolute top-[100px] md:grid grid-cols-2'>
                    <div className=' mt-[30px] relative'>
                        <img src={fseven} alt='profile' className='' />
                        <span className='absolute top-[20px] left-[100px]'>Reduced Stress</span>
                    </div>
                    <div className='flex mt-[30px] relative md:right-[300px] '>
                        <img src={ftwo} alt='profile' className='' />
                        <span className='absolute top-[20px] left-[100px]'>Effective Leadership</span>
                    </div>
                    <div className='flex mt-[30px] relative'>
                        <img src={fthree} alt='profile' className='' />
                        <span className='absolute top-[10px] left-[100px]'>Productive WorkspaceCulture</span>
                    </div>
                    <div className='flex mt-[30px] relative md:right-[300px] '>
                        <img src={ffour} alt='profile' className='' />
                        <span className='absolute top-[20px] left-[100px]'>Lesser<br />Micromanagement</span>
                    </div>
                    <div className='flex mt-[30px] relative '>
                        <img src={fsix} alt='profile' className='' />
                        <span className='absolute top-[20px] left-[100px]'>Better<br /> Delegation</span>
                    </div>
                    <div className='flex mt-[30px] relative md:right-[300px] '>
                        <img src={fone} alt='profile' className='' />
                        <span className='absolute top-[15px] left-[100px]'>Increased workOwnership</span>
                    </div>
                    <img src={image} alt="profile" className='w-[280px] ml-3 mt-10' />
                </div>
            </div>
        </div>

    )
}

export default Ourmission