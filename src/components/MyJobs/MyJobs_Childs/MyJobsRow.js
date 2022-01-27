import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV , faChevronRight } from "@fortawesome/free-solid-svg-icons";

function MyJobsRow() {
  return (
    <div className=" w-full flex-col flex items-center justify-center bg-white rounded-md border border-border-col p-4  boxShadow">
        <div className=" w-full flex items-center justify-between ">
            <p className="md:w-4/12 w-7/12 text-[13px] font-primary font-semibold ">SAP BI/BW (Multiple levels)</p>
            <p className="w-4/12 text-[13px] md:block hidden font-primary font-semibold -ml-16">Status</p>
            <p className="w-2/12 text-[13px] font-primary font-semibold whitespace-nowrap">Status: Active</p>
            <FontAwesomeIcon className="w-2/12 inline-block text-2xl gap-5 text-gray" icon={faEllipsisV} />
        </div>
        <div className="flex items-center md:justify-center justify-between w-full">
         <div className="md:w-4/12 w-full flex items-center justify-start flex-col gap-y-6    ">
             <p className=" w-full text-left text-[13px] font-primary font-semibold"> By Aditi S At Multiple</p>
                    <p className= "w-full text-left text-gray text-xs font-primary">Posted 5 days Ago</p>
         </div>
        <div className="w-4/12  items-center justify-center flex-row py-4 md:flex hidden">
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
        <div className="w-2/12 flex items-center">
            <div className="w-full flex items-center justify-end">
            <p className="font-primary text-green whitespace-nowrap text-sm mr-1">view details</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-3xl text-green font-light"/>
            </div>
     
        </div>
        <div className="w-2/12 flex items-center"></div>

        </div>

    </div>

  );
}

export default MyJobsRow;
