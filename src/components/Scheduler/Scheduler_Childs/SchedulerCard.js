import React from 'react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SchedulerCard() {
  return (
    <div className="w-full border border-border-col flex items-center justify-between  flex-row rounded-lg bg-white p-4 boxShadow relative">
    <div className="w-8/12 flex items-center justify-start flex-col gap-y-7">
      <p className="w-full  text-left text-[13px] font-semibold font-primary">Online</p>
      <p className="w-full  text-left text-xs font-semibold text-gray-extra-light">For Ashish</p>
      <p className="w-full  text-left text-xs font-primary font-normal text-gray-extra-light">By Ace Careers <span className="ml-4"> At Gurugram</span><br/>
      <span className="text-gray-extra-light text-[10px] font-primary ">Duration : 0.25 Hours</span></p>
      {/* <p className="w-full  text-left">Duration : 0.25 Hours</p> */}
    </div>
    <div>
    <FontAwesomeIcon icon={faEllipsisV} className=" absolute top-2 right-4 text-3xl text-gray-extra-light font-extralight"/>
      <p className="font-primary font-semibold text-sm text-gray">OCT</p>
      <p className="font-primary font-extrabold text-[18px] text-gray">17</p>
      <p className="font-primary font-semibold text-sm text-gray">15:00</p>
    </div>
    <div></div>
  </div>
  );
}

export default SchedulerCard;
