import React from "react";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons"

function TicketPopUp({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-primary bg-pop-up">
            <div className="relative  my-6 mx-auto lg:w-6/12 w-80 -top-28">
              <div className="border-0 rounded-lg shadow-lg relative flex items-center justify-center py-6 px-4 flex-col w-full bg-white outline-none focus:outline-none gap-5">
                <h5 className="text-2xl  font-primary font-semibold w-full text-center">
                Raise a ticket
                </h5>
                <FontAwesomeIcon icon={faTimes} className="cursor-pointer text-xl text-gray absolute top-5 right-5"  onClick={() => handleClose()}/>
                <Select className="w-full lg:w-10/12 " />
                <input type="text" className="lg:w-10/12  h-[40px] rounded-[6px] w-full font-primary border px-4 border-border-col" placeholder="URL"/>
               
                <div className="w-full lg:w-10/12  flex items-center justify-start flex-row "> 
                <input type="file" className="w-16 opacity-0 relative top-0 right-[-63px] cursor-pointer h-[54px]" />
                <div className="border border-border-col bg-white w-16 rounded-lg h-20 flex items-center justify-center ">
           <img src="https://my.hiringplug.com/img/upload.png" alt="..." className="w-12 cursor-pointer" />
        
         </div>
         <p className="font-primary ml-5">Upload Screenshot</p></div>
        
                <textarea className="lg:w-10/12 border p-4 border-border-col font-primary w-full rounded-[6px]" placeholder="Message" ></textarea>
                
               <button className="text-sm inline-block px-6 py-1 m-auto  font-primary text-white bg-green  rounded-full">Send</button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default TicketPopUp;
