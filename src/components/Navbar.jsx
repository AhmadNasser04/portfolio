import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'
        >
            <SocialIcon url='https://github.com/AhmadNasser04' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.linkedin.com/in/ahmad-nasser-034222223/' fgColor='gray' bgColor='transparent' />
        </motion.div>

        <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center space-x-5 text-gray-400 p-3 cursor-pointer'
        >
            <a title='Go to contact section' className='text-[#808080] flex items-center text-center justify-center space-x-5' href='#contact'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p className='uppercase hidden md:inline-flex text-sm'>Get In Touch</p>
            </a>
            <a title='Download Resume' className='flex items-center text-center justify-center text-[#808080] space-x-5' href='https://drive.google.com/file/d/126k5bmhyd-MwcsJEpMw4DZKjE5hVIFZI/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <p className='uppercase hidden md:inline-flex text-sm'>Resume</p>
            </a>
        </motion.div>
    </header>
  )
}