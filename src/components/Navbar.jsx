import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import 'tailwindcss/base.css';
import { Link } from 'react-scroll'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "Our Mission",
        },
        {
            id: 3,
            link: "insite",
        },
        {
            id: 4,
            link: "products"
        },
        {
            id: 5,
            link: "contact us"
        },

    ];
    return (
        <div className="flex justify-between items-center w-full h-[66px] px-4 text-black border border-nav-border ">
            <Link to="home" smooth duration={500}>
                <div className='flex  cursor-pointer  hover:scale-105 duration-200  '>
                    <img src={logo} alt='logo' className='ml-2 mt-1 md:ml-[60px]' />
                </div>
            </Link>

            <ul className="hidden mr-[30px] md:flex  xl:flex lg:flex 2xl:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className={"cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san rounded-md active:scale-[.98] active:duration-75 transition-all ease-in-out transform py-[12px] px-[24px]  font-firma"}>

                        <Link to={link} smooth duration={500}>{link}</Link>

                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className={`cursor-pointer pr-4 z-50 text-purple hover:bg-purple-300 transition duration-200 ease-in-out  md:hidden lg:hidden xl:hidden 2xl:hidden ${nav ? 'transform rotate-90' : ''}`}>
                {nav ? <FaTimes size={30} /> : <img src={menu} alt="menu" />}
            </div>
            {nav && (
                <ul className={`w-full flex flex-col justify-center items-center absolute top-0 z-40 bg-white rounded-md overflow-hidden shadow-xl text-black  px-6 py-4 transition duration-200 ease-in-out ${nav ? 'transform scale-110 md:hidden' : ''}`}>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className={"py-[12px] px-[24px] border-b-2 border-blue-50  cursor-pointer capitalize  font-normal text-base hover:scale-105 duration-200 font-san rounded-md   active:scale-[.98] active:duration-75 transition-all  ease-in-out transform text-4 md:hidden "}>

                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Navbar
