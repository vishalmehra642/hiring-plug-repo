import { Line } from "rc-progress";
import React from "react";

function FunnelPopUp({ setOpen, open, data }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-primary bg-pop-up">
            <div className="relative  my-6 mx-auto lg:w-[600px] w-80 -top-28">
              <div className="border-0 rounded-lg shadow-lg relative flex  p-4 flex-col w-full bg-white outline-none focus:outline-none ">
                <h5 className="text-lg font-primary font-semibold w-full text-center">
                  Overall Funnel
                </h5>
                {data?.map(({ percent, name }, index) => (
                  <div key={index} className="w-full">
                    <p className=" w-full mt-2">
                      <Line
                        percent={percent}
                        strokeWidth="3"
                        strokeColor="#00a63f"
                        trailColor="#fff"
                      />
                    </p>
                    <p className="text-sm font-primary text-left w-full font-normal my-1">
                      {name}
                    </p>
                  </div>
                ))}
               <button onClick={handleClose} className="text-sm inline-block w-16 m-auto  font-primary text-green bg-white border border-green rounded-xl">Close</button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default FunnelPopUp;
