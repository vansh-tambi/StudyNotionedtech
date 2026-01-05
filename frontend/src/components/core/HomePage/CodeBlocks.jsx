import React from 'react'
import {motion} from 'framer-motion'
import CTAButton from "../HomePage/Button"
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeColor, codeblock, backgroundGradient 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}
    >


    {/* Section 1  */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-[100%] lg:w-[50%] flex flex-col gap-8"
    >
      {heading}

      {/* Sub Heading */}
      <div className="text-richblack-300 text-sm sm:text-base font-bold w-full sm:w-[85%] -mt-3">
        {subheading}
      </div>

      {/* Button Group */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-7">
        <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
          <div className="flex items-center gap-2 justify-center">
            {ctabtn1.btnText}
            <FaArrowRight />
          </div>
        </CTAButton>
        <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
          {ctabtn2.btnText}
        </CTAButton>
      </div>
    </motion.div>

    {/* Section 2 */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]"
    >
      {backgroundGradient}
      {/* Indexing */}
      <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
      </div>

      {/* Codes */}
      <div
        className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
      >
        <TypeAnimation
          sequence={[codeblock, 1000, ""]}
          cursor={true}
          repeat={Infinity}
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          omitDeletionAnimation={true}
        />
      </div>
    </motion.div>
  </motion.div>
  )
}

export default CodeBlocks
