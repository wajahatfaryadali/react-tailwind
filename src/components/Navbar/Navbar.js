import React, { useState } from 'react'
import {
    AiOutlineMenu,
    AiOutlineClose
} from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const menuList = [
        {
            title: "Home",
        },
        {

            title: "Company",
        },
        {

            title: "Resources",
        },
        {

            title: "About",
        },
        {

            title: "Contact",
        },
    ]

    const handleClick = (actionType) => {
        alert(actionType)
        switch (actionType) {
            case "Home":

                break;
            case "Company":

                break;
            case "Resources":

                break;
            case "About":

                break;
            case "Contact":

                break;

            default:
                break;
        }
    }

    return (
        <div className='flex justify-center h-24 items-center px-4 max-w-[1240px] mx-auto text-white'>
            <h1 className='w-full text-[#00df9a] text-3xl font-bold'>React.</h1>
            <ul className='hidden md:flex'>
                {menuList.map((e, i) =>
                    <li key={i} className='p-4 cursor-pointer' onClick={() => handleClick(e.title)}>
                        {e.title}
                    </li>
                )}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer block fixed right-[20px] md:hidden'>
                {nav ? <AiOutlineClose size={26} color='#00df9a' /> : <AiOutlineMenu size={26} color='#00df9a' />}
            </div>
            <div className={nav ? 'fixed bg-[#000300] top-[0px] left-0 w-[70%] h-full  ease-in-out duration-300 md:hidden' : 'fixed left-[-100%] md:hidden'}>
                <h1 className='w-full text-[#00df9a] text-3xl font-bold pb-1 pl-4 pt-8'>React.</h1>
                <ul className='uppercase'>
                    {menuList.map((e, i) =>
                        <li key={i} className='p-4 border-b border-gray-800 cursor-pointer' onClick={() => handleClick(e.title)}>
                            {e.title}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar