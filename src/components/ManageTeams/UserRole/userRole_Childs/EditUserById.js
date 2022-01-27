import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../../../../layout";

function EditUserById() {
  let { id } = useParams();
  console.log(id);
  return (
    <Layout>
      <div className="flex w-full items-center justify-center flex-col gap-6">
        <h3 className="text-left w-11/12 text-3xl mt-5 font-primary font-medium">
          Edit User Role
        </h3>
        <div className="flex w-11/12 items-center justify-center flex-col xl:flex-row">
          <div className="flex w-8/12 items-center justify-center boxShadow bg-white border border-border-col rounded-lg px-2 gap-6 py-5 flex-col">
            {/* break */}
            <div className="w-[95%] flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
              <label className="lg:w-6/12 w-full">
                <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">
                  Role{" "}
                </span>
                <input
                placeholder="admin"
                  type="text"
                  className=" w-full font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col"
                />
              </label>
              <label className="lg:w-6/12 w-full">
                <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">
                  Brief Description
                </span>
                <input
                placeholder="main user of a company"
                  type="text"
                  className=" w-full font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col"
                />
              </label>
            </div>
            {/* break */}
            <label className=" w-[95%] flex items-center justify-start">
              <input type="checkbox" className="mr-2" />
              <span className=" w-[95%] inline-block font-primary text-sm">
                Active
              </span>
            </label>
            {/* break */}
            <div className="flex items-center justify-center w-full gap-4">
              <Link to="/employer-user-roles" className="font-primary text-sm px-4 py-[3px] rounded-full text-green  border border-green ">
                Cancel
              </Link>
              <button className="font-primary text-sm px-4 py-1 rounded-full bg-green text-white">
                Save
              </button>
            </div>
          </div>
          <div className="flex w-4/12 items-center justify-center"></div>
        </div>
      </div>
    </Layout>
  );
}

export default EditUserById;
