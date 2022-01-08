import React, { useState } from "react";
import { Application_Data, Visit_Data } from "../Data/Config";
import { Nav_Links } from "../Data/Config";
import Application from "../ReuseableComponents/Application";
import ListItem from "../ReuseableComponents/ListItem";
import SideCard from "../ReuseableComponents/SideCard";
import VisitedCard from "../ReuseableComponents/VisitedCard";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(0);

  //  we can also make the ui more breakable
  const check = Nav_Links.filter(({ id }) => selected === id);
  console.log(check);
  return (
    <div className="flex  justify-center w-full">
      <div className="flex items-center justify-center w-11/12 py-4">
        <div
          className={` ${
            toggle ? "hidden" : "w-2/12"
          }  flex justify-between items-center flex-col h-full relative`}
        >
          <div className="flex items-center justify-between flex-row w-full">
            <i
              className="fas fa-bars text-black cursor-pointer text-2xl"
              onClick={() => setToggle(!toggle)}
            ></i>
            <h1 className="inline-block text-orange-400 pr-10">Logo</h1>
          </div>

          <div className="flex flex-row items-center justify-center absolute w-full top-14">
            <ul className="w-full">
              {/* menu links */}
              {Nav_Links?.map(({ links, iconClass, id }) => (
                <ListItem
                  selected={selected}
                  iconClass={iconClass}
                  id={id}
                  links={links}
                  setSelected={setSelected}
                />
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`md:w-10/12  w-full flex items-center flex-col justify-between md:pl-10`}
        >
          <div className="w-full flex items-center justify-between">
            <h1>
              {toggle ? (
                <i
                  className="fas fa-bars text-black cursor-pointer text-2xl mr-5"
                  onClick={() => setToggle(!toggle)}
                ></i>
              ) : null}

              <span>Welcome KBPM india Pvt Ltd.</span>
            </h1>
            <div className="md:w-2/12 flex items-center justify-between">
              <button className="w-28 h-8 whitespace-nowrap leading-1 rounded-full bg-green-600 text-white  text-sm  px-4 text-center">
                Post A job
              </button>
              <i className="far fa-comment-alt text-2xl"></i>
              <i className="far fa-bell text-2xl"></i>
            </div>
          </div>
          <div className=" flex w-full mt-16 items-center flex-col justify-center">
            <h1 className="w-full text-3xl font-semibold mb-4">
              {Nav_Links?.filter(({ id }) => selected === id)?.map(
                ({ links }) => (
                  <span>{links}</span>
                )
              )}
            </h1>
            <div className="break_flex w-full justify-center items-center flex flex-col md:flex-row">
              <div className="md:w-8/12 w-11/12 flex items-center justify-center flex-col">
                <div className="w-full md:h-20 h-auto p-4 md:p-0 rounded-xl border-gray-400 border md:text-2xl text-base font-normal text-orange-500 flex items-center justify-center">
                  <h3>
                    Congrats your company has successfully hires 14 candidates{" "}
                  </h3>
                </div>
                <div className="flex w-full  justify-center gap-12 flex-col md:flex-row mt-8">
                  <div className="md:w-5/12 w-full border border-gray-400 rounded-xl p-5">
                    <h1 className="text-xl font-sans mb-2">
                      status of applications
                    </h1>

                    {Application_Data?.map(({ count, percentage }, index) => (
                      //   application status
                      <Application
                        index={index}
                        count={count}
                        percentage={percentage}
                      />
                    ))}
                  </div>
                  <div className="md:w-5/12 w-full border border-gray-400 rounded-xl p-5">
                    <div className="flex items-center justify-center flex-col ">
                      <h2 className="text-base font-medium w-full text-left mb-4">
                        Since your last visits
                      </h2>
                      <div className="grid w-full grid-cols-2 gap-5">
                        {Visit_Data?.map(({ num, data }, index) => (
                          //   visit card
                          <VisitedCard num={num} data={data} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 flex items-center flex-col w-full">
                {/* we can use this component multiple time for right side of the dashboard */}
                <SideCard  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
