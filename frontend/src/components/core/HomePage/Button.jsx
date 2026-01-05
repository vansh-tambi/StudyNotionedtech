import React from 'react'
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'

const Button = ({children, active, linkto}) => {
  return (
    <Link to={linkto} className='w-full sm:w-auto'>
        <motion.div 
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`text-center text-[13px] sm:text-[14px] px-6 py-3 rounded-md font-bold w-full sm:w-auto
          ${active ? "bg-yellow-50 text-black":" bg-richblack-800"}
          transition-all duration-200 shadow-md hover:shadow-lg
          `}
        >
            {children}
        </motion.div>
    </Link>
  )
}

export default Button
