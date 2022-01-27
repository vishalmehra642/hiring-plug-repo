import React from "react";
import UserSummaryProgreeSheet from "./UserSummaryProgreeSheet";

function UserSummaryStatusSheet() {
  return (
    <div className="flex items-start justify-between flex-col lg:flex-row w-full px-4 bg-white rounded-lg boxShadow border gap-4 border-border-col py-5">
      <div className="flex w-full lg:w-5/12 items-start justify-start flex-col gap-6">
        <p className="font-primary text-[16] font-semibold">IBM Case Manager</p>
        <p className="font-primary text-xs font-semibold text-gray-light">
          <span>Posted on: 11-Sep-2019</span>
          <br />
          <span>At Mumbai</span>
        </p>
      </div>

      <UserSummaryProgreeSheet />
    </div>
  );
}

export default UserSummaryStatusSheet;
