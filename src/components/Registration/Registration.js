import React from "react";
import Pic from "./Registration.jpeg"
import "./Registration.css";
import FormFields from "./FormFields";

const Registration = () => {
  return (
    <div className="Registration px-[2rem] md:px-[5rem]">
      <div className="flex flex-col items-center pt-[6rem] pb-[2rem] Golden font-semibold text-[40px]">
        Registration
        <hr className="w-[80%] mt-5 text-white/50" />
      </div>
      <div className="Card rounded-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-5 flex justify-center items-center rounded-md">
            <img className="rounded-md" src={Pic} alt="" />
          </div>
          <div className="p-5 bg-white text-black">
            <FormFields />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
