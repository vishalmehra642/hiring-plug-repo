import React, { useState } from "react";
import UploadDocuments from "./UploadDocuments";
import NewJob from "./NewJob";
import SelectTitle from "./SelectTitle";
import SelectTemplate from "./SelectTemplate";
import PostAJobForm from "./PostAJobForm";
function PostajobLayout() {
  const [jobform, setJobForm] = useState(false);
  return (
    <div className="flex items-center justify-center w-full flex-col xl:pb-72 md:pb-44">
      <div className="w-11/12 flex-col md:flex-row flex items-center justify-start my-4">
        <h3 className="text-left w-full xl:w-2/12 md:4/12 text-3xl mt-5 font-primary font-medium">
          Post a Job
        </h3>
        {jobform ? null : (
          <p className="text-lg mt-2 w-full xl:w-10/12 md:w-8/12 font-primary text-green">
            Get started with ANY of the following options
          </p>
        )}
      </div>

      {jobform ? (
        <PostAJobForm setJobForm={setJobForm} />
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white border rounded-lg border-border-col 
      boxShadow px-4 py-10 h-full w-11/12 gap-5"
        >
          <UploadDocuments />
          <SelectTemplate />
          <SelectTitle />
          <NewJob setJobForm={setJobForm}/>
        </div>
      )}
    </div>
  );
}

export default PostajobLayout;
