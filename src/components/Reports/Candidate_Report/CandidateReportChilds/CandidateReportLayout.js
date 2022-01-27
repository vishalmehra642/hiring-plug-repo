import React from 'react';
import CandidateDataList from './CandidateDataList';

function CandidateReportLayout() {
  return (
    <div className="flex w-full items-center justify-center flex-col">
    <div className="flex items-center justify-start w-11/12 mb-5">
    <h3 className="text-left w-full xl:w-2/12 md:4/12 text-3xl mt-5 font-primary font-medium">
    Download Report
        </h3>
    </div>
    <div className="w-11/12 flex items-center justify-center flex-col p-4 bg-white border border-border-col rounded-lg">
        {/* break */}
        <div className="w-full flex items-center justify-center border border-border-col flex-row">
   <div className="w-1/12 flex items-center justify-start py-1 px-1">
       <p className="font-semibold font-primary text-sm">Sr No</p>
   </div>
   <div className="w-3/12 flex items-center justify-start py-1 px-1 border-x border-border-col">
   <p className="font-semibold font-primary text-sm">Report Title</p>
   </div>
   <div className="w-4/12 flex items-center justify-start py-1 px-1 border-r border-border-col">
   <p className="font-semibold font-primary text-sm">Last Downloaded</p>
   </div>
   <div className="w-4/12 flex items-center justify-start py-1 px-1">
   <p className="font-semibold font-primary text-sm">Actions</p>
   </div>
        </div>
        {/* break */}
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
      <CandidateDataList />
        {/* break */}
    </div>
    </div>
  );
}

export default CandidateReportLayout;
