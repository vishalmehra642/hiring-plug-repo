import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faCommentAlt , faBell} from "@fortawesome/free-regular-svg-icons";
import WhatsApp from "../assets/icons/wanew.png"
import { Link } from "react-router-dom";

function Header({ toggleMenu, setToggleMenu }) {
  const style = {
    "boxShadow": "0 0 10px rgb(28 39 60 / 10%) "
  }
  return (
    <header
    style={style}
      className={` ${
        toggleMenu ? "justify-between px-4 lg:pl-5 lg:pr-6" : "justify-evenly"
      } sticky top-0  z-[5]  flex lg:bg-[#f4f5f8] bg-white items-center  w-full lg:h-20 h-16 `}
    >
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setToggleMenu(!toggleMenu)}
        className={`${
          toggleMenu ? "lg:block hidden" : "lg:hidden block"
        } text-2xl cursor-pointer`}
      />

      <h2 className="hidden lg:inline-block text-[13px] font-medium font-primary">Welcome KPMG India Pvt Ltd</h2>
      <div className="flex items-center justify-between flex-col relative">
        <div className="flex items-center lg:gap-x-6 ml-[50px] lg:ml-0 sm:gap-x-4 w-full justify-between">
          <Link to="/post-job" className="bg-green text-white leading-[1.7] font-normal w-28 h-7 text-center rounded-full hidden lg:inline-block font-primary cursor-pointer">Post A job</Link>
          <FontAwesomeIcon icon={faCommentAlt} className="text-2xl text-gray cursor-pointer lg:h-20 h-16" />
          <div className="relative group lg:h-20 h-16">
          <FontAwesomeIcon icon={faBell} className="text-2xl text-gray cursor-pointer lg:h-20 h-16" />
          <div className="hidden w-[280px] border border-border-col p-4  top-[60px] left-[-130px]  sm:left-[-255px] absolute  font-primary bg-white group-hover:flex items-start justify-center gap-4 flex-col">
          <p className="text-sm font-semibold">You made a new Panel User</p>
          <p className="text-sm ">A new panel user created by you - .</p>
          <p className="text-sm ">25 mins ago</p>
          <p className="text-sm font-semibold">Welcome to HiringPlug.</p>
          <p className="text-sm ">Welcome to HiringPlug.</p>
          <p className="text-sm ">5 days ago</p>
          <p className="text-sm ">View All Notifications</p>
        </div>
          </div>
        </div>
       
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <p className="font-primary font-medium cursor-pointer">vishal</p>
        <p className="cursor-pointer">icon</p>
        <img src={WhatsApp} alt="..." className="w-11 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
