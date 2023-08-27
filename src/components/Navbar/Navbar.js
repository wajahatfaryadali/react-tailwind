import React, { useState } from 'react'
import {
    AiOutlineMenu,
    AiOutlineClose
} from "react-icons/ai";
import { routes } from '../../constants';

const Navbar = ({ handleModal }) => {

    const [nav, setNav] = useState(false)

    const menuList = [
        {
            title: "Home",
            address: routes.home,
            visible: true
        },
        {

            title: "Company",
            address: routes.analytics,
            visible: true
        },
        {
            title: "News",
            address: routes.getInTouch,
            visible: true
        },
        {
            title: "Pricing",
            address: routes.pricing,
            visible: true
        },
        {

            title: "Contact Me",
            address: routes.contact,
            visible: false
        },
    ]

    const handleClick = (title) => {
        setNav(false)
        if (title === "Contact Me") {
            handleModal("Show")
        }

    }

    return (
        <div className='flex justify-center h-24 items-center px-4 max-w-[1240px] mx-auto text-white'>
            <h1 className='w-full text-[#00df9a] text-3xl font-bold'>Logo.</h1>
            <ul className='hidden md:flex'>
                {menuList.map((e, i) => e.visible ?
                    <a href={`#${e.address}`} key={i} onClick={e.title === "Contact Me" ? () => handleModal("Show") : () => console.log("")}>
                        <li className={`px-4 py-2 cursor-pointer hover:scale-105 duration-50 hover:text-[#00df9a]  ${e.title === "Contact Me" ?
                            "border border-[#00df9a] whitespace-nowrap flex-shrink-0" : ""}`
                        }>
                            {e.title}
                        </li>
                    </a> : ""
                )}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer block fixed right-[20px] md:hidden'>
                {nav ? <AiOutlineClose size={26} color='#00df9a' /> : <AiOutlineMenu size={26} color='#00df9a' />}
            </div>
            <div className={nav ? 'fixed bg-[#000300] top-[0px] left-0 w-[70%] h-full  ease-in-out duration-300 md:hidden' : 'fixed left-[-100%] md:hidden'}>
                <h1 className='w-full text-[#00df9a] text-3xl font-bold pb-1 pl-4 pt-8'>Logo.</h1>
                <ul className='uppercase'>
                    {menuList.map((e, i) => e.visible ?
                        <a href={`#${e.address}`} key={i} onClick={() => handleClick(e.title)}>
                            <li className='p-4 border-b border-gray-800 cursor-pointer'>
                                {e.title}
                            </li>
                        </a>
                        : ""
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar