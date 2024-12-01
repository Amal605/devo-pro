import React from 'react';
import pic from '../../assets/test-2.jpg';
import { Progress } from "flowbite-react";

export default function About() {
    return (
        <div className='body-color mt-20 md:mt-5 dark:bg-black dark:text-white'>
            <div className='container bg-white shadow-2xl  p-9 flex flex-col md:flex-row w-full dark:bg-black dark:text-white'>
                <div className='flex flex-col w-full md:w-1/2'>
                    <div className='flex flex-col sm:flex-row justify-evenly '>
                        <div className='mx-auto'>
                            <img src={pic} className='rounded-md' />
                        </div>
                        <div className='px-5 md:pt-0 pt-6 text-left '>
                            <p className='text-gray-700 pb-4 dark:text-gray-400'><span className='font-bold text-black dark:text-white'>Name: </span>Morgan Freeman</p>
                            <p className='text-gray-700 pb-4 dark:text-gray-400'><span className='font-bold text-black dark:text-white'>Occupation: </span>Actor</p>
                            <p className='text-gray-700 pb-4 dark:text-gray-400'><span className='font-bold text-black dark:text-white'>Nationality: </span>American</p>
                            <p className='text-gray-700 pb-4 dark:text-gray-400'><span className='font-bold text-black dark:text-white'>Born: </span>June 1, 1937</p>
                        </div>
                    </div>
                    <div className='pt-9'>
                        <div className="text-base font-medium text-blue-600 mb-2">Blue</div>
                        <Progress progress={45} color="blue" />
                        <div className="text-base font-medium text-red-600 mb-2">Red</div>
                        <Progress progress={75} color="red" />
                        <div className="text-base font-medium text-green-600 mb-2">Green</div>
                        <Progress progress={25} color="green" />
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-1/2 pl-4 md:pt-0 pt-7 dark:bg-black dark:text-white'>
                    <div className='flex flex-col justify-evenly'>
                        <h2 className='font-bold text-4xl relative after:block after:absolute after:h-1 after:w-[110px] after:bg-blue-600 after:top-11 after:left-6 '>About me</h2>
                        <p className='py-5 text-justify'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                        <p className='py-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        <p className='py-5 text-justify'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}