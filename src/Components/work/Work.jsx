import React from 'react'
import { Card } from 'flowbite-react'
import pic1 from '../../assets/work-1.jpg'
import pic2 from '../../assets/work-2.jpg'
import pic3 from '../../assets/work-3.jpg'
import pic4 from '../../assets/work-4.jpg'
import pic5 from '../../assets/work-5.jpg'
import pic6 from '../../assets/work-6.jpg'
export default function Work() {
    return (
        <div className='body-color dark:bg-black dark:text-white'>
            <div className='container text-center bg-white dark:bg-black dark:text-white'>
                <h1 className='text-5xl font-bold py-1 uppercase'>Portfolio</h1>
                <p className='py-4 after:block after:absolute relative after:w-10 after:h-1 after:bg-blue-600 after:top-[90%] after:left-[45%] md:after:top-11 md:after:left-[49%] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white'>
                            <div className='overflow-hidden'>
                                <img src={pic1} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white '>
                            <div className='overflow-hidden'>
                                <img src={pic2} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white '>
                            <div className='overflow-hidden'>
                                <img src={pic3} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white '>
                            <div className='overflow-hidden'>
                                <img src={pic4} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white '>
                            <div className='overflow-hidden'>
                                <img src={pic5} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                        <div className='bg-white shadow-md m-4 dark:bg-black dark:text-white '>
                            <div className='overflow-hidden'>
                                <img src={pic6} alt="work" className='w-full h-full hover:scale-125 transition-all duration-1000'/>
                            </div>
                            <div className='flex justify-between px-5 py-4 relative'>
                                <div className='flex flex-col'>
                                    <h4>Lorem impsum dolor</h4>
                                    <p className='text-slate-500'><span className='text-teal-400'>Web Design</span> / 18 Sep. 2018</p>
                                </div>
                                <button className='border-4 p-[2%] px-2 border-solid border-blue-600 rounded-[100%] absolute top-[30%] right-[3%] '><i className='fa-solid fa-plus text-blue-600 '></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
