import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTravelExplore } from "react-icons/md";
import WebView from "./WebView/index";
import MobileView from "./MobileView/index";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <WebView />
      <MobileView />
    </>
  );
};

export default Navbar;
