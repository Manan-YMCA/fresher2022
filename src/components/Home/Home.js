import React from 'react'
import LandingImage from "../assets/girl.jpg"
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="LandingImage">
        <img className="Image" src={LandingImage} alt="" />
        <div className="Heading">
          <div className="flex flex-col justify-center items-start pl-20 pt-6 h-full">
            <p className="Two Golden">REIZO 2022</p>
            <p className="Three">
              Get Ready to experience The most awaited freshers party of YMCA
            </p>
            <button className='Four ButtonFormat '>Get Passes</button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default Home