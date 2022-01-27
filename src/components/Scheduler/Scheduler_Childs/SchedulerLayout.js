import React from "react";
import NotificationCard from "../../Dashboard/DashBoard_Childs/NotificationCard";
import SchedulerCard from "./SchedulerCard";

function SchedulerLayout() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-y-5">
      <div className="flex items-center justify-start w-11/12">
        <h3 className="text-3xl  font-primary font-medium mt-5">Scheduler</h3>
      </div>
      <div className="w-11/12 flex items-center justify-start flex-row gap-x-2">
        <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
          Pending (5)
        </button>
        <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
          Confirmed (21)
        </button>
        <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
          Rescheduled (7)
        </button>
      </div>
      <p className="w-11/12 font-primary font-normal text-sm text-left text-green ">
        Calender View
      </p>
      <div className="w-[95%] flex items-start justify-center gap-12 xl:flex-row flex-col">
        <div className="w-full xl:w-8/12 flex items-center justify-center flex-col">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* reusable */}
            <SchedulerCard />
            <SchedulerCard />
            <SchedulerCard />
            <SchedulerCard />
            <SchedulerCard />
            <SchedulerCard />
            <SchedulerCard />
          </div>
        </div>
        <div className="w-full xl:w-4/12 flex items-center justify-center flex-col gap-6">
        <NotificationCard
              middlePara="Post a new Job."
              btn="Post A Job"
              link="/post-job"
            />
             <NotificationCard
              middlePara="Schedule candidates for interview."
              btn="Candidates"
              link="/candidates"
            />
            
        </div>
      </div>
    </div>
  );
}

export default SchedulerLayout;
