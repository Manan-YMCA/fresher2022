import React from 'react';
import {AiOutlineHome} from "react-icons/ai"
import { Link } from 'react-router-dom';
//import'./style.css';

const MenuItem = (props)=>{
    return (
      <React.Fragment>
        <Link to={props.link}>
          <div className="flex justify-center items-center gap-3 hover:scale-105 transition-all px-5 my-4">
            <div
              style={{ borderColor: `${props.color}` }}
              className="border-2  rounded-full p-3 "
            >
             {props.icon}
            </div>
            <div
              style={{ borderColor: `${props.color}` }}
              className="flex items-center justify-center text-[25px] border-2 rounded-md w-full"
            >
              {props.title}
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
};

export default MenuItem ;