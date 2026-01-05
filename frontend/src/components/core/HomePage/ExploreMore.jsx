import React, { useState } from "react";
import {motion} from 'framer-motion';
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center my-10 px-4">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-base sm:text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </motion.div>

      {/* Tabs Section - Mobile Responsive */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center lg:flex-nowrap gap-2 sm:gap-5 -mt-5 mx-auto w-full max-w-[95%] lg:w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]"
      >
        {tabsName.map((ele, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[12px] sm:text-[14px] lg:text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-3 sm:px-5 lg:px-7 py-[5px] lg:py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="hidden lg:h-[50px]"></div>

      {/* Cards Group */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 py-10"
      >
        {courses.map((ele, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard
                cardData={ele}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ExploreMore;