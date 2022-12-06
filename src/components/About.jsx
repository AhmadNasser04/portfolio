import React from 'react'
import { motion } from 'framer-motion'
import myPhoto from '../resources/alsome.webp'


export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h1 className='absolute select-none top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='mt-24 -mb-20 md:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      >
        <img src={myPhoto} alt='myPhoto' 
          className='mt-7 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' loading='lazy'/>
      </motion.div>

      <div className='mt-24 space-y-5 px-0 md:px-10'>
        <h1 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
          background
        </h1>
        <p className='short:text-sm text-base'>
          I'm Ahmad, a first-year computer science at LAU. Here's a little bit about me... I've been coding for over 2 years now. As a Full Stack Developer, I've worked on many projects and even landed an internship at 17. Along the journey I realized my passion for coding was massive, I've been trying to improve my abilities, and out-do myself each time.
        </p>
      </div>
    </motion.div>
  )
}