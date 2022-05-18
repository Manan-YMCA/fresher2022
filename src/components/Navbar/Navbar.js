import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import SideNav from "./SideNav";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Register", href: "/registration", current: false },
];

export default function Navbar(props) {

  return (
    <div className="Navbar">
      <div className="NavbarContent">
        <SideNav/>
        <div className="text-[24px]">
          <p className="">
            Reizo <span className="text-[#CE9C43]">2022</span>
          </p>
        </div>
        <div>
          <button className="ButtonFormat">Get Passes</button>
        </div>
      </div>
    </div>
  );
}
