import React from 'react'
import laptop from "../../assets/laptop.jpg"
const Analytics = () => {
    return (
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
                <div className='my-auto'>
                    <p className='text-[#00df9a] uppercase font-bold text-xl m-1'>Data Analytics Dashboard</p>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl my-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </p>
                    <div className='md:text-left text-center'>
                        <button className='rounded bg-black text-[#00df9a] py-3 w-[200px] font-medium my-6'>Get Started</button>
                    </div>
                </div>

            </div>
<div className='h-[40px]'>

</div>
        </div>
    )
}

export default Analytics