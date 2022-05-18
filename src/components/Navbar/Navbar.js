import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaFileMedicalAlt } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./style.css";
import SideNav from "./SideNav";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Register", href: "/registration", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
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

// const NavPanel = () => {
//   return <div>Panel</div>;
// };
