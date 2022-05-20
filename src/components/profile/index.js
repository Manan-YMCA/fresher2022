import React from "react";

import "./style.css";

const Profile = (props) => {
  return (
    <div className="Profile ">
      <div className="flex flex-col items-center pt-[6rem] pb-[2rem] Golden font-semibold text-[40px]">
        My Pass
        <hr className="w-[80%] mt-5 text-white/50" />
      </div>
      <div className="Card rounded-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-5 flex flex-col justify-center items-center rounded-md">
            <p> Your QR Code Pass</p>
            <img
              className="rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt=""
            />
          </div>
          <div className="Content p-5  text-black">
            <div className="flex justify-center relative">
              <div className="Pfp ">
                <img
                  className="rounded-md"
                  src="https://64.media.tumblr.com/ee6fe1777e17b8128123125f4b9e8039/867a9d2e54b531be-11/s1280x1920/b93391e6ac7725eac641014018923bea467787d3.jpg"
                  alt="saitama"
                />
              </div>
            </div>
            <div className="pt-5 text-[15px] md:text-[20px] 2xl:text-[25px] leading-loose">
              <p className="font-bold text-[#F7A440]">
                Name: <span className="text-gray-600">Dude</span>
              </p>
              <p className="font-bold text-[#F7A440]">
                Roll Number: <span className="text-gray-600">190010080XX</span>
              </p>{" "}
              <p className="font-bold text-[#F7A440]">
                Course: <span className="text-gray-600">Btech</span>
              </p>{" "}
              <p className="font-bold text-[#F7A440]">
                Branch:{" "}
                <span className="text-gray-600">
                  Electronics and Communication
                </span>
              </p>{" "}
              <p className="font-bold text-[#F7A440]">
                Year of admission: <span className="text-gray-600">2021</span>
              </p>{" "}
              <p className="font-bold text-[#F7A440]">
                Father's name: <span className="text-gray-600">Dude Sr.</span>
              </p>
              <p className="font-bold text-[#F7A440]">
                Contact number: <span className="text-gray-600">9898989898</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const details = [
  "Dude",
  "190010080XX",
  "Btech",
  "Ece",
  "Electronics and Communication",
  "Dude Sr.",
  "9898989898",
];

export default Profile;
