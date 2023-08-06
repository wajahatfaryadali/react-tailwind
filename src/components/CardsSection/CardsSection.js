import React from 'react'
import single from "../../assets/single.png"
import double from "../../assets/double.png"
import triple from "../../assets/triple.png"

const CardsSection = () => {

    const cardsData = [
        {
            img: single,
            title: "Single User",
            price: "$149",
            pkgBenifits: ["500 GB storage.", "1 Granted user.", "Send upto 2 GB"],
            button: "Start Trail",
        },
        {
            img: double,
            title: "Double Users",
            price: "$249",
            pkgBenifits: ["1000 GB storage.", "2 Granted user.", "Send upto 6 GB"],
            button: "Start Trail",
        },
        {
            img: triple,
            title: "Multiple Users",
            price: "$349",
            pkgBenifits: ["2000 GB storage.", "3 Granted user.", "Send upto 16 GB"],
            button: "Start Trail",
        },
    ]

    return (
        <div className='w-full py-20 px-4 text-black bg-white'>
            <div className='max-w-[1240px] grid md:grid-cols-3 mx-auto gap-8'>

                {cardsData?.map((item, i) =>
                    <div className={`w-full ${i === 1 ? "bg-gray-100" : "bg-white"} shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`} key={i}>
                        <img src={item.img} alt="/img" className={`w-20 mt-[-3rem] ${i === 1 ? "bg-transparent" : "bg-white"} mx-auto`} />
                        <h2 className='text-2xl font-bold text-center py-6'>
                            {item.title}
                        </h2>
                        <p className='text-center font-bold text-2xl pb-3'>
                            {item.price}
                        </p>
                        <div className='text-center font-medium'>
                            {item.pkgBenifits.map((e, index) => (
                                <p key={index} className='py-2 border-b mx-8'>
                                    {e}
                                </p>)
                            )}
                        </div>
                        <button className='md:mt-3 mt-4 bg-[#00df9a] w-[200px] text-md font-bold rounded-md py-3 mx-auto text-white'>{item.button}</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardsSection