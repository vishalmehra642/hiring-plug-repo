import React from "react";
import { Link } from "react-router-dom";
import JobActionRow from "./JobActionRow";



function DashBoardJobActions() {
  const mapped = [
    {},{},{},{},{},
  ]
  return (
    <div className="w-full bg-white border border-border-col rounded-lg items-center justify-center flex-col p-10 hidden lg:flex boxShadow">
      <h4 className="w-full text-left text-sm font-primary font-semibold">Jobs Actions</h4>
      <div className="flex items-center justify-between w-full bg-base py-1 px-2">
        <p className="text-lg font-primary w-4/12 text-left">Job Details</p>
        <p className="text-lg font-primary w-4/12 text-left">Activity</p>
        <p className="text-lg font-primary w-4/12 text-left pl-[70px]">Status</p>
      </div>
      {
        mapped?.map((value , index) => (
          <JobActionRow key={index} />
        ))
      }
      <div className="flex w-full items-center justify-center">
        <Link to="/my-jobs" className="bg-green px-5 rounded-full mt-8 text-[13px] py-[8px] font-primary text-white outline-none focus:outline-none">view all</Link>
      </div>
    </div>
  );
}

export default DashBoardJobActions;
