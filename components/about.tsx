"use client";
import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        initial = {{ opacity: 0, y: 100}}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ delay : 0.175}}
    >
        <h1 className="text-3xl font-medium capitalize mb-8">About Me</h1>
        <p className="mb-3"> UWaterloo Computer Engineering graduate with five work term placements. Looking for full time job!</p>
      
    </motion.section>
  )
}
