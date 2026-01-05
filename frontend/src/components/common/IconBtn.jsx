import React from 'react'
import {motion} from 'framer-motion'
import * as Icons from 'react-icons/fa'

export const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
    iconName,
}) => {
    const Icon = Icons[iconName];

  return (
    <motion.button 
    whileHover={{ scale: disabled ? 1 : 0.95 }}
    whileTap={{ scale: disabled ? 1 : 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    disabled={disabled}
    onClick={onClick}
    className={`${customClasses ? customClasses : 'bg-yellow-50 text-richblack-900 font-bold'} 
        px-4 sm:px-6 py-2 rounded-md transition-all duration-300 text-sm sm:text-base
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'shadow-md hover:shadow-lg'}`}
    type={type}>
        {
            children ? 
            (<>
                <span>
                    {text} 
                </span>
                {children}
            </>) 
            : 
            (
                <div className='flex items-center justify-center space-x-2'>
                    <span>{text}</span>
                    {Icon && <Icon className='text-sm'/>}
                </div>
            )
        }
    </motion.button>
  )
}
