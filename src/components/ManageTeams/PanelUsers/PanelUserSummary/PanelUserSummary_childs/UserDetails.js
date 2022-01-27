import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons"


function UserDetails() {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg boxShadow border gap-4 border-border-col py-5">
    <FontAwesomeIcon icon={faUser} className="w-4/12 text-5xl lg:text-[100px] text-btn-gray" />
    <div className="w-3/12 flex items-center justify-start flex-col gap-6">
        <p className="font-primary flex items-center justify-start flex-col w-full">
            <span className="text-xs font-semibold w-full text-left ">Role</span>
            <span className="text-[16px] w-full text-left">Operator</span>
        </p>
        <p className="font-primary flex items-center justify-start flex-col w-full">
            <span className="text-xs font-semibold w-full text-left ">Activation Date</span>
            <span className="text-[16px] w-full text-left">01-Jan-1970 </span>
        </p>
    </div>
    <div className="w-4/12 flex items-center justify-start flex-col gap-6">
    <p className="font-primary flex items-center justify-start flex-col w-full">
            <span className="text-xs font-semibold w-full text-left ">Email ID</span>
            <span className="text-[16px] w-full text-left break-words">vishal@hiringplug.com</span>
        </p>
        <p className="font-primary flex items-center justify-start flex-col w-full">
            <span className="text-xs font-semibold w-full text-left ">Last Login</span>
            <span className="text-[16px] w-full text-left">19 hour(s) ago</span>
        </p>
    </div>

</div>
  );
}

export default UserDetails;
