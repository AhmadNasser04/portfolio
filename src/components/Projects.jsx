import React from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from '@mui/material'
import { projects } from './ProjectsData.js'

export default function Projects() {
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h1 className='absolute select-none top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h1>

        <div className='relative w-full flex overflow-x-scroll mt-18 md:mt-0 overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project, index) => (
                <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen'>
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className='group relative flex justify-center items-center'>
                            <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A]/60 w-[100%] h-[100%] z-10 rounded-lg'>
                                <h1 className='absolute bottom-5 left-5'>{project.time}</h1>
                                <a href={project.link} target='_blank' rel='noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 absolute bottom-5 right-5 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                    </svg>
                                </a>
                            </div>
                            <div className='group filter' >
                                <img
                                    className='group short:h-[150px] lg:h-[350px] short:lg:h-[165px] short:xl:h-[300px] w-auto rounded-lg group-hover:blur-[2px] z-[-1]' 
                                    src={project.pic} alt='Team Member' loading='lazy'
                                />
                            </div>
                        </div>
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10'>
                        {/* Skills */}
                        <div className='flex justify-center items-center gap-2'>
                            {project.technologies.map((technology, index) => (
                                <Tooltip title={technology[0]} key={index}>
                                    <img src={technology[1]} alt='used' className='rounded-full w-16 h-16 object-cover border' />
                                </Tooltip>
                            ))}
                        </div>
                        <h1 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Project {index + 1} of {projects.length}:</span> {project.name}
                        </h1>

                        <p className='text-lg text-center'>
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] -skew-y-12' />
    </motion.div>
  )
}
