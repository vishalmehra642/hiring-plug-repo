import React from "react";
import UserDetails from "./PanelUserSummary_childs/UserDetails";
import UserSummaryStatusSheet from "./PanelUserSummary_childs/UserSummaryStatusSheet";
import NotificationCard from "../../../Dashboard/DashBoard_Childs/NotificationCard"

function PanelUserSummaryLayout(props) {
  return (
    <div className="flex items-center justify-center w-full flex-col gap-6">
      <div className="flex items-center justify-start flex-col w-11/12 mt-5">
        <h3 className="text-3xl w-full text-left font-primary font-medium ">
          Vishal Mehra
        </h3>
      </div>

      <div className="flex w-11/12 items-start justify-center flex-col xl:flex-row gap-6">
        <div className="flex items-center justify-center flex-col w-full xl:w-8/12 gap-6">
          <UserDetails />
          <UserSummaryStatusSheet />
          <UserSummaryStatusSheet />
          <UserSummaryStatusSheet />
          <UserSummaryStatusSheet />
        </div>
        <div className="flex items-center justify-center flex-col w-full xl:w-4/12">
        <NotificationCard
              middlePara="Post a new Job"
              btn="Post A Job"
              link="/post-job"
            />
        </div>
      </div>
    </div>
  );
}

export default PanelUserSummaryLayout;
