import React from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function JobActionRow() {
  return(
    <div className="w-full border-b border-gray-light flex items-center justify-center">
    <div className="w-4/12">
      <p className="w-full text-sm break-words font-primary font-semibold">
      SAP BI/BW (Multiple levels)
      </p>
      <p className="text-xs font-semibold font-primary">Multiple | 3 days</p>
    </div>
    <div className="w-4/12 flex items-center justify-center flex-row py-4 ">
      <div className="flex items-center justify-center w-full flex-col gap-y-3">
      <div className="flex items-center justify-center">
        <p className="font-primary text-3xl mr-1">9</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl font-light"/>
      </div>
      <p className="text-gray text-xs font-primary">Proposed</p>
      </div>
      <div className="flex items-center justify-center w-full flex-col gap-y-3">
      <div className="flex items-center justify-center">
        <p className="font-primary text-3xl mr-1">3</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl font-light"/>
      </div>
      <p className="text-gray text-xs font-primary">Review</p>
      </div>
      <div className="flex items-center justify-center w-full flex-col gap-y-3">
      <div className="flex items-center justify-center">
        <p className="font-primary text-3xl mr-1">0</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl font-light"/>
      </div>
      <p className="text-gray text-xs font-primary">Offered</p>
      </div>
      <div className="flex items-center justify-center w-full flex-col gap-y-3">
      <div className="flex items-center justify-center">
        <p className="font-primary text-3xl mr-1">0</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl font-light"/>
      </div>
      <p className="text-gray text-xs font-primary">Hired</p>
      </div>
    </div>
    <div className="w-4/12 flex items-center justify-evenly">
      <p className='font-primary text-[16px] '>Active</p>
      <FontAwesomeIcon icon={faChevronRight} className="text-4xl font-light text-green"/>
    </div>
  </div>
  );
}

export default JobActionRow;
