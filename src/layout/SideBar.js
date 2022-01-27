import React , {useState} from "react";
import { SideBarList , SidebarListAssets  , DropDowns} from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function SideBar({ toggleMenu, setToggleMenu }) {
  const [dropdown , setDropDown] = useState("");

  const ToggleDropDown = (params) => {
    if(dropdown === params){
     return setDropDown("")
    }
      setDropDown(params)
  };


  return (
    <div
      className={`${
        toggleMenu ? "lg:hidden flex" : "lg:flex hidden"
      } items-center lg:sticky top-0 h-[100vh] flex-col 2xl:w-[15%] z-10 lg:w-[30%] sm:w-[300px] w-full bg-white ml-5 side_menu `}
    >
      <div className="h-20 w-full flex items-center justify-around">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-2xl cursor-pointer"
        />
        <Link to="/employer-dashboard">
          <img
            src="https://my.hiringplug.com/images/logo-footer.png"
            alt="brand_logo"
            className="w-[148px]"
          />
        </Link>
      </div>
      <ul className=" top-20 h-[calc(100vh-80px)] w-full ">
        {SideBarList?.map(({ name, img_link, link }, index) => (
          <NavLink to={link} activeClassName="is-active border-l-[6px] border-green" exact key={index}>
            <li
             className="w-full flex flex-col text-[16px] font-medium text-gray font-primary items-center justify-start pl-11 py-[10px] my-[2px]"
            >
              <p className="w-full flex">
                {" "}
                <img
                  src={img_link}
                  alt="..."
                  className="w-7 mr-3"
                />
                {name}
              </p>
            </li>
          </NavLink>
        ))}
        {/* break */}
        {DropDowns.map(({name, img_link, sub_links,} , index) => (
         <li
         onClick={() => ToggleDropDown(name)}
         key={index}
         style={{userSelect : "none"}}
         className={` w-full cursor-pointer flex flex-col text-[16px] font-medium text-gray font-primary items-center justify-start pl-11 py-[10px] my-[2px]`}
        >
          <p className="w-full flex">
            {" "}
            <img
              src={img_link}
              alt="..."
              className="w-7 mr-3"
            />
            {name}
            <FontAwesomeIcon icon={faCaretDown} className="mt-[3px] ml-[10px] text-xl  " />
          </p>
            <ul
              className={` w-full ml-4 flex items-start justify-center  mt-3 flex-col`}
            >
              {dropdown === name ? sub_links?.map(({ sub_links_name  , sub_link}, index) => (
                <NavLink activeClassName="is-active  border-l-[6px] border-green " to={sub_link} className="w-full">
                <li className="text-gray w-full text-[16px] font-medium  font-primary py-[8px] " key={index}>
                  {sub_links_name}
                </li>
                </NavLink>
              )) : null}
            </ul>
        </li>
        ))}
        {/* break */}
         {SidebarListAssets?.map(({ name, img_link, sub_links, link }, index) => (
          <NavLink to={link} activeClassName="is-active  border-l-[6px] border-green" exact key={index}>
            <li
             className="w-full flex flex-col text-[16px] font-medium text-gray font-primary items-center justify-start pl-11 py-[10px] my-[2px]"
            >
              <p className="w-full flex">
                {" "}
                <img
                  src={img_link}
                  alt="..."
                  className="w-7 mr-3"
                />
                {name}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
