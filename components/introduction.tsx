'use client'

import React from 'react'
import Image from 'next/image'
import profileImage from "@/public/profilepic.png"
import {motion} from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Introduction() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className = "relative">
                <motion.div
                    initial = {{ opacity: 0, scale: 0}}
                    animate = {{ opacity: 1, scale: 1}}
                    transition = {{ type: "spring", duration: 0.2 }}
                >
                    <Image className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" src={profileImage} alt="Profile Picture" priority={true}/>
                    <motion.p className = "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                        initial = {{opacity: 0, y: 100}}
                        animate = {{opacity: 1, y: 0}}
                    >
                        Looking for full time software developer positions, graduating in May 2025!
                    </motion.p>
                </motion.div>
            </div>
        </div>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
           initial={{opacity: 0, y: 100}}
           animate={{opacity: 1, y: 0}} 
           transition={{
            delay: 0.1
           }}
        >
            <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all">Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/></Link>
            <a className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all">Download CV <HiDownload/></a>
            <a className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"><BsLinkedin/></a>
            <a className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"><FaGithub/></a>
        </motion.div>
    </section>
      
  )
}
