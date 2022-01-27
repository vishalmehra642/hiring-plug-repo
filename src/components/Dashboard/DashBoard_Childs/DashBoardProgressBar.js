import React from 'react';
import { Line } from 'rc-progress';

function DashBoardProgressBar({data , setOpenPopUp}) {
  return (
    <div className="flex items-center justify-center w-full xl:w-6/12 flex-col bg-white border border-border-col rounded-lg px-4 py-5 relative boxShadow">
    <h6 className="font-primary text-sm font-bold text-[#000] text-left w-full">Status of Application(s)</h6>
    {data?.map(({percent , name}, index) => (
      <div key={index} className="w-full">
      <p className=" w-full mt-2" >
      <Line percent={percent} strokeWidth="3" strokeColor="#00a63f" trailColor="#fff" />
    </p>
    <p className="text-sm font-primary text-left w-full font-normal my-1">{name}</p>
    </div>
    ))}
    <p className="text-[16px] text-green font-primary font-semibold absolute bottom-3 right-5 cursor-pointer  " onClick={() => setOpenPopUp(true)}>{`See Funnel >`}</p>
  </div>
  );
}

export default DashBoardProgressBar;
