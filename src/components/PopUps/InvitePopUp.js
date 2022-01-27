import React from "react";

function InvitePopUp({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-primary bg-pop-up">
            <div className="relative rounded-lg my-6 mx-auto lg:w-6/12 w-80 -top-28 border-[8px] border-green ">
              <div className="border-0  shadow-lg relative flex py-8 px-4 flex-col w-full bg-white outline-none focus:outline-none gap-5">
                <h5 className="text-lg font-primary font-semibold w-full text-center">
                Welcome to hiringplug™ "Preferred Partner Program"
                </h5>
                <div>
                <p className="font-primary text-sm font-semibold">"Manage all your Agencies & recruitment cycle in one place!</p>
                <p className="font-primary text-sm "> If you are already working with an amazing recruitment agency and would like to bring them on board, please provide the below details. We will invite them on your behalf and also add to your "Favourites" so you can seamlessly continue to work with them on our platform."</p>
                </div>
                <div className="flex items-center justify-center w-full gap-6 flex-col lg:flex-row">
                    <input type="text" className="border border-border-col w-full h-[40px] rounded-[6px] font-primary px-5" placeholder="Agency Name" />
                    <input type="text" className="border border-border-col w-full h-[40px] rounded-[6px] font-primary px-5" placeholder="Contact Person Name" />
                </div>
                <div className="flex items-center justify-center w-full gap-6 flex-col lg:flex-row">
                    <input type="email" className="border border-border-col w-full h-[40px] rounded-[6px] font-primary px-5" placeholder="Contact Email-ID" />
                    <input type="number" className="border border-border-col w-full h-[40px] rounded-[6px] font-primary px-5" placeholder="Contact Phone Number" />
                </div>
                <textarea className="border border-border-col w-full font-primary px-5 py-4 rounded-[6px]" placeholder="Message"></textarea>
                <div className="flex items-center justify-center w-full gap-5">
                <button onClick={handleClose} className="text-sm inline-block px-5 py-[3px] font-primary text-green bg-white border border-green rounded-xl">Close</button>
                <button className="text-sm inline-block px-5 py-[3px] font-primary text-white bg-green  rounded-xl">Save</button>
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

export default InvitePopUp;
