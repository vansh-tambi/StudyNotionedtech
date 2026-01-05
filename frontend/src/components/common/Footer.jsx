import React from "react";
import {motion} from 'framer-motion';
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 mb-7 lg:pl-0"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={Logo} 
                alt="StudyNotion Logo" 
                className="object-contain w-[140px]" 
              />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring" }}>
                  <FaFacebook className="cursor-pointer hover:text-blue-500 transition-colors" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring" }}>
                  <FaGoogle className="cursor-pointer hover:text-red-500 transition-colors" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring" }}>
                  <FaTwitter className="cursor-pointer hover:text-blue-400 transition-colors" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring" }}>
                  <FaYoutube className="cursor-pointer hover:text-red-600 transition-colors" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full sm:w-[48%] lg:w-[30%] mb-7 lg:pl-0"
            >
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <motion.div 
                whileHover={{ x: 5 }}
                className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2"
              >
                <Link to={"/help-center"}>Help Center</Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full sm:w-[48%] lg:w-[30%] mb-7 lg:pl-0"
            >
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-full sm:w-[48%] lg:w-[30%] mb-7 lg:pl-0"
                >
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm gap-3"
      >
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start">
            {BottomFooter.map((ele, i) => {
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700"
                  } px-3 cursor-pointer hover:text-richblack-50 transition-all duration-200`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            Made with ❤️ © 2024 Studynotion
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;