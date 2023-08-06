import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineGithub, AiFillDribbbleCircle } from "react-icons/ai";

const Footer = () => {


    const footerData = [
        {
            title: "Solution",
            list: ["Analytics", "Marketing", "Commerce", "Insights"],
            link: "#"
        },
        {
            title: "Support",
            list: ["Pricing", "Documentation", "Guides", "API Status"],
            link: "#"
        },
        {
            title: "Company",
            list: ["About", "Blog", "Jobs", "Press", "Partners"],
            link: "#"
        },
        {
            title: "Legal",
            list: ["Clain", "Policy", "Terms"],
            link: "#"
        },
    ]

    const iconsList = [
        {
            icon: AiFillFacebook,
            link: "#"
        },
        {
            icon: AiFillInstagram,
            link: "#"
        },
        {
            icon: AiFillTwitterSquare,
            link: "#"
        },
        {
            icon: AiOutlineGithub,
            link: "#"
        },
        {
            icon: AiFillDribbbleCircle,
            link: "#"
        },
    ]

    return (
        <div className='w-full text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto text-white grid lg:grid-cols-3 gap-4'>
                <div className='md:mb-0 mb-4'>
                    <h1 className='w-full text-[#00df9a] text-3xl font-bold'>React.</h1>
                    <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className='flex gap-4 mt-2'>
                        {iconsList.map((e, i) =>
                            <span key={i}>
                                <e.icon size={"32px"} />
                            </span>
                        )}
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4'>

                        {footerData.map((item, index) =>
                            <div>
                                <p className='text-gray-400 text-lg' key={index}>{item.title}</p>
                                {item.list.map((listItem, i) =>
                                    <p className='py-2' key={index}>{listItem}</p>
                                )}

                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer