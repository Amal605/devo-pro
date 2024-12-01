import React from 'react'
import CountUp from 'react-countup'

export default function Counte() {
    return (
        <div className={`overlayPic relative overflow-y-hidden`}>
            <div className="container m-auto p-4 md:p-6 lg:p-12 xl:p-12">
                <div className="flex flex-col md:flex-wrap md:flex-row  justify-center items-center mb-40 md:mb-0 h-[100vh] md:h-[80vh] lg:h-[50vh]">
                    <div className="countUp flex flex-col text-center justify-center items-center w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-2 md:mb-3 md:m-auto">
                        <i className='fa fa-check myBorder p-4 text-xl md:text-3xl'></i>
                        <CountUp end={450} duration={3} className='text-2xl md:text-4xl md:py-0 pt-3' />
                        <p>WORKS COMPLETED</p>
                    </div>
                    <div className="countUp flex flex-col text-center justify-center items-center w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-2 md:mb-3 md:m-auto">
                        <i className='fa fa-journal-whills myBorder p-5 text-xl md:text-3xl'></i>
                        <CountUp end={25} duration={3} className='text-2xl md:text-4xl md:py-0 pt-3' />
                        <p>WORKS COMPLETED</p>
                    </div>
                    <div className="countUp flex flex-col text-center justify-center items-center w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-2 md:mb-3 md:m-auto">
                        <i className='fa fa-people-group myBorder p-5 text-xl md:text-3xl'></i>
                        <CountUp end={550} duration={3} className='text-2xl md:text-4xl md:py-0 pt-3' />
                        <p>TOTAL CLIENTS</p>
                    </div>
                    <div className="countUp flex flex-col text-center justify-center items-center w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-2 md:mb-3 md:m-auto">
                        <i className="fa-solid fa-award myBorder p-5 text-xl md:text-3xl"></i>
                        <CountUp end={48} duration={3} className='text-2xl md:text-4xl md:py-0 pt-3' />
                        <p>AWARD WON</p>
                    </div>
                </div>
            </div>
        </div>
    )
}