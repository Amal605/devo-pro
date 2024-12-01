import React from 'react'
import pic from '../../assets/hero-bg.jpg'
import { useTypewriter, Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <div className='text-white w-full h-screen md:h-[100vh]'>
      <div className='relative'>
        <img src={pic} alt="" className='w-full h-[100vh] bg-cover bg-center object-cover object-center max-w-full' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-[50%] lg:left-[50%] md:top-[50%] md:left-[50%] sm:top-[50%] sm:left-[51%]'>
          <h1 className='text-3xl md:text-5xl font-bold leading-relaxed md:leading-snug text-center'>
            I am Morgan Freeman
          </h1>
          <span className='text-white text-center'>
            <p className='pt-4'>
              <Typewriter
                words={['Designer', 'Photographer', 'Freelancer', 'Developer', 'Designer']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}