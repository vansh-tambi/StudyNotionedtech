import React from "react";
import {motion} from 'framer-motion';

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`w-full sm:w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[18px] sm:text-[20px]`}
        >
          {cardData?.heading}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-richblack-400 text-sm sm:text-base"
        >
          {cardData?.description}
        </motion.div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 text-[14px] sm:text-[16px]"
        >
          <HiUsers />
          <p>{cardData?.level}</p>
        </motion.div>

        {/* Flow Chart */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 text-[14px] sm:text-[16px]"
        >
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;