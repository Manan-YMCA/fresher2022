import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaFileMedicalAlt } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./style.css";
import { SidePanel } from "./SidePanel";

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
        <GiHamburgerMenu
          onClick={()=>setShowPanel((prev) => !prev)}
          color="white"
          size={30}
          className="m-0 p-0 cursor-pointer"
        />

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
