import React from 'react'
import { routes } from '../../constants'

const NewsLetter = () => {
    return (
        <div className='w-full py-16 text-white px-3' id={routes.getInTouch}> 
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <p className='md:4xl sm:text-2xl text-sm font-bold py-2'>Want tips & tricks to optimise your flow?</p>
                    <p>Signup for our newsletter and stay upto data</p>

                </div>
                <div className='my-4'>
                    <div>
                        <input type="email" name="" placeholder="email@email.com" id="" className='p-2 rounded-md md:w-[220px] w-full' />
                        <button className='bg-[#00df9a] w-[160px] text-black text-md rounded-md md:ml-4 ml-0 md:my-6 my-3 py-3'>Notify Me</button>
                        <p className='text-sm'>We care about the proctection of your data. Read our</p>
                        <p className='text-[#00df9a] underline text-sm'>Privacy Policy.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter