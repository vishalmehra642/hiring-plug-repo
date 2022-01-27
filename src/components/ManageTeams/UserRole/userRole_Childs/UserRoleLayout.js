import React from "react";
import NotificationCard from "../../../Dashboard/DashBoard_Childs/NotificationCard";
import { EditableData_List } from "../config";
import UserEditableList from "./UserEditableList";

function UserRoleLayout() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center w-11/12 flex-col">
        {/* break */}
        <div className="w-full flex items-center justify-start flex-col">
          <p className="text-sm w-full text-left font-primary  mt-5">
            Manage Team/
          </p>
          <h3 className="text-left w-full  text-3xl mt-1 font-primary font-medium">
            Users Roles{" "}
          </h3>
        </div>
        {/* break */}
        <div className="w-full flex items-center justify-center flex-col xl:flex-row gap-6">
          {/* break */}
          <div className="w-full xl:w-8/12 flex items-center justify-between flex-col pb-8 bg-white">
            {/* break */}
            <div className="w-full flex items-center justify-between bg-light-gray-table py-1 px-2">
              <p className="font-primary font-semibold text-sm w-3/12 flex items-center justify-start">
                Name
              </p>
              <p className="font-primary font-semibold text-sm w-3/12 flex items-center justify-start">
                Description
              </p>
              <p className="font-primary font-semibold text-sm w-3/12 flex items-center justify-start">
                Status
              </p>
              <p className="font-primary font-semibold text-sm w-2/12 flex items-center justify-start">
                Action
              </p>
            </div>
            {/* break */}
            {EditableData_List?.map(({data , id}) => (
              <UserEditableList data={data} id={id} key={id} />
            ))}

            {/* break */}
          </div>
          {/* break */}
          <div className="w-full xl:w-4/12 flex items-center justify-between flex-col gap-6">
            <NotificationCard
              middlePara="Manage Authorities of User"
              btn="Update Rights"
            />
            <NotificationCard middlePara="Add More Roles" btn="Add Role" link="/employer-user-role-details" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRoleLayout;
