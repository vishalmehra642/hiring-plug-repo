import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-center bg-[#f4f5f8]">
      <SideBar
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <div className="w-full flex flex-col">
        <Header
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />

        {children}
        <Footer />
      </div>
    </div>
  );
}
