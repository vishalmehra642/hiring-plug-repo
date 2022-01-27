import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OptimizedImage from "../OptimizedImg/OptimizedImage"

function MobileNotificationPopUp({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-primary bg-pop-up">
            <div className="relative  my-6 mx-auto lg:w-6/12 w-80 -top-28">
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">
                  <div className="flex items-center justify-center border-2 border-green flex-col gap-6 py-5 px-1">
                  <OptimizedImage src="https://my.hiringplug.com/img/whatsapp.png" alt="..." className="w-full" />
                  <FontAwesomeIcon icon={faTimes} className="cursor-pointer text-2xl text-gray absolute top-8 right-8"  onClick={() => handleClose()}/>
                <div className="w-full">
                <div className="flex items-center justify-between w-full bg-[#ccc] py-1 px-4">
                    <p className="font-primary flex items-center justify-start w-3/12 border-r border-white">User Type</p>
                    <p className="font-primary flex items-center justify-start w-3/12 border-r border-white pl-3">Name</p>
                    <p className="font-primary flex items-center justify-start w-3/12 border-r border-white pl-3">Mobile(SMS)</p>
                    <p className="font-primary flex items-center justify-start w-3/12  pl-3">Mobile(WhatsApp)</p>
                </div>
                <div className="flex items-start justify-between w-full bg-[#cccccc7a] py-1 px-4">
                    <p className="font-primary flex items-center justify-start w-3/12 ">User Type</p>
                    <p className="font-primary flex items-center justify-start w-3/12 pl-3">Name</p>
                    <p className="font-primary flex items-center justify-center flex-col w-3/12  pl-3">
                    <input type="text" className="px-2 w-11/12 border border-border-col font-primary" placeholder="Mobile Number" />
                    <p className="font-primary text-blue font-semibold cursor-pointer">Send OTP</p>
                    </p>
                    <p className="font-primary flex items-center justify-center flex-col w-3/12  pl-3">
                    <input type="text" className="px-2 w-11/12 border border-border-col font-primary" placeholder="Mobile Number" />
                    <p className="font-primary text-blue font-semibold cursor-pointer">Send OTP</p>
                    </p>
                </div>
                </div>
               
                  </div>
             
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default MobileNotificationPopUp;
