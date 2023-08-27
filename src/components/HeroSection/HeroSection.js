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
                <p className='text-[#00df9a] md:4xl sm:text-2xl text-sm font-bold'>Front End Developer</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 sm:py-2 py-1'>Just UI</h1>
                <div className='flex justify-center text-2xl'>
                    <p>This project is built using {"- "}</p>
                    <TypeAnimation
                        sequence={[
                            'ReactJs',
                            1000,
                            'Vite',
                            1000,
                            'Tailwind',
                            1000,
                        ]}
                        wrapper="span"
                        speed={0}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl italic font-bold text-[#00df9a] md:py-2 py-1 mb-2'>

                    This showcases my proficiency in creating a fully mobile-first, responsive UI design.
                </p>
                <p className='md:text-2xl text-xl font-bold text-gray-600 md:py-2 py-1 mb-2'>
                    However, it does not include functionality to demonstrate my skill in that aspect.
                </p>
                <button className='bg-[#00df9a] w-[200px] text-md mx-auto rounded-md py-3' onClick={() => handleClick("Get Started")}>Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection