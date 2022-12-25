import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import myPhoto from '../resources/me.webp'

export default function Hero() {
    const [text] = useTypewriter({
        words: ["Hi, I'm Ahmad Nasser", 'Self Tought', 'Computer Science Student', "Guy-who-loves-gaming.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={myPhoto} 
            alt='myPhoto'
        />
        <div className='z-20'>
            <h1 className='text-sm uppdercase text-gray-500 pb-2 tracking-[15px]'>
                FULL STACK DEVELOPER
            </h1>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7ABBA' />
            </h1>

            <div>
                <a href='#about'><button className='heroButton'>About</button></a>
                <a href='#skills'><button className='heroButton'>Skills</button></a>
                <a href='#projects'><button className='heroButton'>Projects</button></a>
            </div>
        </div>
    </div>
  )
}