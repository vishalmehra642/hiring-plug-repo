import React from "react";
import NotificationCard from "../../../Dashboard/DashBoard_Childs/NotificationCard";
import { PanelUserTableData } from "../config";
import PanelUserTabelHead from "./PanelUserTabelHead";
import PanelUserTable from "./PanelUserTable";

const PanelUsersLayout = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="flex-col w-full flex items-center justify-start">
        <div className="flex items-center justify-start w-11/12 flex-col mb-5">
          <p className="text-sm w-full text-left font-primary  mt-5">
            Manage Team/
          </p>
          <h3 className="text-3xl w-full text-left font-primary font-medium ">
            Panel Users
          </h3>
        </div>

        <div className="w-[95%] flex items-start justify-center flex-col xl:flex-row gap-6">
          <div className="flex items-center justify-center flex-col w-full xl:w-[70%]">
            <PanelUserTabelHead />

            {PanelUserTableData?.map(({ data, switchValue, id }) => (
              <PanelUserTable
                switchToggle={switchValue}
                id={id}
                key={id}
                data={data}
              />
            ))}
          </div>

          <div className="flex items-center justify-center flex-col w-full xl:w-[30%] gap-6">
            <NotificationCard
              src="https://my.hiringplug.com/img/bulb.gif"
              boldPara="Add Users"
              middlePara="Up to 10 users* "
              btn="Add Users"
              link="/employer-panel-user-details"
            />
            <NotificationCard
              middlePara="Post a new Job"
              btn="Post A Job"
              link="/post-job"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelUsersLayout;
