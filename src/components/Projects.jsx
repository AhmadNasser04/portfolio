import React from 'react'
import tictactoe from '../resources/tictactoe.webp'
import ecommer from '../resources/ecommer.webp'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            name: 'TicTacToe',
            pic: tictactoe,
            description: 'A fun tictactoe game with local multiplayer, the bot may also be unbeatable, you can test your luck with that one ;D'
        },
        {
            name: 'ECOMMER',
            pic: ecommer,
            description: 'An amazing ecommer app made with React, Redux Toolkit, Strapi, and mui, with stripe integration'
        },
    ]
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
                        <img className='short:h-[150px] lg:h-[350px] short:lg:h-[165px] short:xl:h-[300px] w-auto' src={project.pic} alt='project' loading='lazy'/>
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10'>
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
