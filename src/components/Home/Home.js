import React from 'react'
import LandingImage from "../assets/girl.jpg"
import { BiChevronsDown } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="LandingImage">
        <img className="Image" src={LandingImage} alt="landing" />
        <div className="Heading">
          <div className="flex flex-col justify-center items-center md:items-start md:pl-20 pt-16 md:pt-12 h-[92%]">
            <p className="Two Golden">REIZO 2022</p>
            <p className="Three">
              Get Ready to experience The most awaited freshers party of YMCA
            </p>
            <button className="Four ButtonFormat ">Get Passes</button>
          </div>
          <div className='flex flex-col items-center'>
            <p className="">Know More</p>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: 5 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <BiChevronsDown  color='white' className="text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-20"></div> */}
    </div>
  );
}

export default Home