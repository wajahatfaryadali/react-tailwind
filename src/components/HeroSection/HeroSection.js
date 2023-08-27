import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { routes } from '../../constants';


const HeroSection = () => {

    const handleClick = (actionType) => {
        // alert(actionType)
    }

    return (
        <div className=' text-white' id={routes.home}>
            <div className=' max-w-[800px] mt-[-96px] w-full h-screen flex justify-center flex-col mx-auto text-center'>
                <p className='text-[#00df9a] md:4xl sm:text-2xl text-sm font-bold'>Wajahat Faryad Ali</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 sm:py-2 py-1'>Software Engineer</h1>
                <div className='flex justify-center text-xl'>
                    <p>Skill set includes {" - "} </p>
                    <TypeAnimation
                        sequence={[
                            ' UI Developer',
                            1000,
                            ' HTML',
                            1000,
                            ' CSS',
                            1000,
                            ' Javascript',
                            1000,
                            ' Jquery',
                            1000,
                            ' React Js',
                            1000,
                            ' React Redux',
                            1000,
                            ' Core Redux',
                            1000,
                            ' Redux tool-kit',
                            1000,
                            ' Redux Saga',
                            1000,
                            ' React Routers',
                            1000,
                            ' Material UI',
                            1000,
                            ' Semantic UI',
                            1000,
                            ' BootStrap',
                            1000,
                            ' Tailwind',
                            1000,
                            ' Git',
                            1000,
                        ]}
                        wrapper="span"
                        speed={0}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl italic font-bold text-[#00df9a] md:py-2 py-1 mb-2 px-2 md:px-0'>
                    This showcases my proficiency in creating a fully mobile-first, responsive UI design.
                </p>
                <p className='md:text-2xl text-xl font-bold text-gray-600 md:py-2 py-1 mb-2 px-2 md:px-0'>
                    However, it does not include functionality to demonstrate my skill in that aspect.
                </p>
                <button className='bg-[#00df9a] w-[200px] text-md mx-auto rounded-md py-3' onClick={() => handleClick("Get Started")}>Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection