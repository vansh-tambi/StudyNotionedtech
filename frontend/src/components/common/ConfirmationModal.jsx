import React from 'react'
import {motion} from 'framer-motion'
import { IconBtn } from './IconBtn'

export const ConfirmationModal = ({modalData}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'
    >
        {/* Modal container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className='w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6'
        >
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-semibold text-richblack-5'>{modalData.text1}</p>
                <p className='text-richblack-200'>{modalData.text2}</p>
            </div>

            <div className='flex items-center gap-x-4 mt-6'>
                <IconBtn
                    onClick={modalData?.btn1Handler}
                    text={modalData.btn1Text}
                    customClasses={'bg-yellow-50 text-richblack-900'}
                />
                <button
                    onClick={modalData?.btn2Handler}
                    className='cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900'
                >
                    {modalData.btn2Text}
                </button>
            </div>
        </motion.div>
    </motion.div>
  )
}
