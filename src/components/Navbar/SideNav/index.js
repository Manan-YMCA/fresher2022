import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

//import'./style.css';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideNav = (props) => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <React.Fragment>
      <GiHamburgerMenu
        onClick={() => setShowPanel((prev) => !prev)}
        color="white"
        size={30}
        className="m-0 p-0 cursor-pointer"
      />
    </React.Fragment>
  );
};

export default SideNav;
