import React, { useState } from "react";
import OptimizedImage from "../../OptimizedImg/OptimizedImage";
import FunnelPopUp from "../../PopUps/FunnelPopUp";
import MobileNotificationPopUp from "../../PopUps/MobileNotificationPopUp";
import { Width_Percent, DashBoard_Card } from "./config";
import DashBoardCardContainer from "./DashBoardCardContainer";
import DashBoardJobActions from "./DashBoardJobActions";
import DashBoardProgressBar from "./DashBoardProgressBar";
import NotificationCard from "./NotificationCard";

function DashboardLayout() {
  const [openPopUp , setOpenPopUp] = useState(false)
  const [notifyOpen , setNotifyOpen] = useState(false)
  return (
    <div className="flex w-full items-center justify-center px-3 pb-4 lg:px-0">
      <div className="flex flex-col items-center justify-center w-full lg:w-[94%]">
        <h3 className="text-3xl font-medium my-5 w-full text-left font-primary">
          Dashboard
        </h3>
        <MobileNotificationPopUp open={notifyOpen} setOpen={setNotifyOpen} />
        <FunnelPopUp open={openPopUp} setOpen={setOpenPopUp} data={Width_Percent} />
        <div className="flex items-start justify-between flex-col w-full md:flex-row gap-6">
          <div className="w-full xl:w-8/12 flex items-center justify-center flex-col gap-y-7">
            <div className="w-full min-h-[56px] bg-white border border-border-col flex items-center px-4 lg:px-10 rounded-lg boxShadow">
              <p className="text-[#ff9c00] tracking-wide lg:text-lg text-[16px] break-words font-primary font-medium">
                Congrats your company has successfully hired 14 candidates
              </p>
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-y-6">
            <div className="w-full flex items-center justify-center flex-col xl:flex-row gap-6">
              <DashBoardProgressBar data={Width_Percent} setOpenPopUp={setOpenPopUp} />
              <DashBoardCardContainer data={DashBoard_Card} />
            </div>
            <DashBoardJobActions />
            </div>
          </div>
          <div className="w-full md:w-4/12  flex items-center justify-center flex-col gap-y-6">
            <div className="w-full bg-white border border-border-col rounded-lg p-4 boxShadow">
              <OptimizedImage
                src="https://my.hiringplug.com/img/empathy.png"
                alt="..."
                className="w-full"
              />
            </div>
            <NotificationCard
              boldPara="Mobile notifications"
              middlePara="Never miss an important update"
              btn="Verify"
              PopUp
              setOpen={setNotifyOpen}
            />
            <NotificationCard
              src="https://my.hiringplug.com/img/bulb.gif"
              boldPara="Add Users"
              middlePara="Up to 10 users* "
              btn="Add Users"
              link="/employer-panel-user-details"
            />
            <NotificationCard              
              boldnum="226"
              middlePara=" New candidates has been proposed Assess now."
              btn="Review"
              link="/candidates"
            />
            <NotificationCard middlePara="Post a new Job" btn="Post A Job" link="/post-job" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
