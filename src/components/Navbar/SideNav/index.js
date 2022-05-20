import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const NavList = [
    {
      title: "Home",
      Link: "/",
      Icon: <AiOutlineHome className="text-[30px]" />,
    },
    {
      title: "Events",
      Link: "/Events",
      Icon: <GiPartyPopper className="text-[30px]" />,
    },
    {
      title: "Get Passes",
      Link: "/registration",
      Icon: <MdFaceRetouchingNatural className="text-[30px]" />,
    },
    {
      title: "Sponsors",
      Link: "/Sponsors",
      Icon: <FiHeart className="text-[30px]" />,
    },
    {
      title: "Contact us",
      Link: "",
      Icon: <AiOutlineMail className="text-[30px]" />,
    },
  ];

  const list = (anchor) => (
    <div className="w-[20rem] h-full SideNavBg">
      <div className="pt-8 ">
        {NavList.map((i, index) => (
          <div onClick={toggleDrawer(anchor, false)}>
            <MenuItem
              // color={colors[index]}
              title={i.title}
              link={i.Link}
              icon={i.Icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu
              color="white"
              size={30}
              className="m-0 p-0 cursor-pointer"
            />
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
