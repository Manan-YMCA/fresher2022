import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import SideNav from "./SideNav";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Register", href: "/registration", current: false },
];

export default function Navbar(props) {

  return (
    <div className="Navbar text-white">
      <div className="NavbarContent">
        <SideNav />
        <div className="text-[24px]">
          <Link to="/">
            <p>
              Reizo <span className="text-[#CE9C43]">2022</span>
            </p>
          </Link>
        </div>
        <div>
          <Link to="/registration">
            <button className="ButtonFormat">Get Passes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
