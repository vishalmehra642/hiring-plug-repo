import React , {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import MyJobsRow from "./MyJobsRow";
import NotificationCard from "../../Dashboard/DashBoard_Childs/NotificationCard";
import MobileNotificationPopUp from "../../PopUps/MobileNotificationPopUp";

function MyjobsLayout() {
  const [open , setOpen] = useState(false)
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col gap-5">
        <div className="w-11/12 justify-start flex-col lg:flex-row flex items-center gap-x-10 gap-y-5 mt-5">
          <h3 className="text-left md:4/12 text-3xl  font-primary font-medium mr-7 whitespace-nowrap">
            My Jobs
          </h3>
          <MobileNotificationPopUp open={open} setOpen={setOpen} />
          <label className="max-w-2xl w-full flex">
            <input
              type="text"
              className=" font-primary px-4 w-full h-9 border border-border-col rounded-tl-[4px] rounded-bl-[4px]"
              placeholder="search by Jobs , Job Id  , Locations ..."
            />
            <button className="bg-green rounded-tr-[4px] rounded-br-[4px] px-3 h-9">
              <FontAwesomeIcon className="text-xl text-white" icon={faSearch} />
            </button>
          </label>
          <div className="flex items-center justify-center w-10 h-10 rounded-md text-xl cursor-pointer text-white bg-border-col">
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
        {/* break */}
        <div className="flex items-center justify-start w-[95%] flex-wrap gap-5">
          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>
          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>

          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>

          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>

          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>

          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>

          <button className="border border-green bg-white text-green h-8 px-3 rounded-full text-xs font-normal fonr-primary">
            Active (61)
          </button>
        </div>
        {/* main layout */}
        <div className="w-[95%] gap-5 flex items-start justify-center xl:flex-row flex-col">
          {/*  */}
          <div className="xl:w-8/12 w-full flex items-center justify-center flex-col gap-5">
            <MyJobsRow />
            <MyJobsRow />
            <MyJobsRow />
            <MyJobsRow />
            <MyJobsRow />
          </div>

          {/*  */}
          <div className="xl:w-4/12 w-full flex items-center justify-center gap-6 flex-col px-4">
          <NotificationCard
              boldPara="Mobile notifications"
              middlePara="Never miss an important update"
              btn="Verify"
              PopUp
              setOpen={setOpen}
            />
            <NotificationCard middlePara="Post a new Job" btn="Post A Job" link="/post-job" />
            <NotificationCard
             src="https://my.hiringplug.com/img/bulb.gif"
              boldPara="Add Users"
              middlePara="Up to 10 users* "
              btn="Add Users"
              link="/employer-panel-user-details"
            />
            <NotificationCard
            link="/employer-reports"
              middlePara="Download tracker."
              btn="Download tracker"
            />
          </div>
        </div>
        {/* main layout */}
      </div>
    </div>
  );
}

export default MyjobsLayout;
