import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserSummaryProgreeSheet() {
  return (
    <div className="flex lg:w-7/12 w-full items-start flex-col gap-6 justify-start">
      <p className="font-primary text-sm text-red font-semibold"> Archived</p>
      <p className="font-primary text-sm">Status</p>

      <div className="w-full items-center justify-start flex flex-row gap-7">
        <div className="flex items-center justify-center flex-col gap-y-3">
          <div className="flex items-center justify-center">
            <p className="font-primary text-3xl mr-1">9</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-3xl font-light"
            />
          </div>
          <p className="text-gray text-xs font-primary">Proposed</p>
        </div>

        <div className="flex items-center justify-center flex-col gap-y-3">
          <div className="flex items-center justify-center">
            <p className="font-primary text-3xl mr-1">3</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-3xl font-light"
            />
          </div>
          <p className="text-gray text-xs font-primary">Review</p>
        </div>
        <div className="flex items-center justify-center  flex-col gap-y-3">
          <div className="flex items-center justify-center">
            <p className="font-primary text-3xl mr-1">0</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-3xl font-light"
            />
          </div>
          <p className="text-gray text-xs font-primary">Offered</p>
        </div>
        <div className="flex items-center justify-center  flex-col gap-y-3">
          <div className="flex items-center justify-center">
            <p className="font-primary text-3xl mr-1">0</p>
          </div>
          <p className="text-gray text-xs font-primary">Hired</p>
        </div>
      </div>
    </div>
  );
}

export default UserSummaryProgreeSheet;
