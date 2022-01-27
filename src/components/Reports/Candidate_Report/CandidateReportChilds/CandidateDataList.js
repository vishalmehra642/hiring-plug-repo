import React from 'react';

function CandidateDataList() {
  return (
    <div className="w-full flex items-center justify-center border-b border-x h-[70px] border-border-col flex-row ">
    <div className="w-1/12 flex items-center justify-start py-1 px-1 h-6">
        <p className="font-primary text-sm">1</p>
    </div>
    <div className="w-3/12 flex items-center justify-start py-1 px-1 border-x border-border-col h-full">
    <p className=" font-primary text-sm">KPMG- Report1</p>
    </div>
    <div className="w-4/12 flex items-center justify-start py-1 px-1 border-r border-border-col h-full">
    <p className="font-primary text-sm">	5 days ago by Anil Kumar Sharma</p>
    </div>
    <div className="w-4/12 flex items-center justify-start py-1 px-1 gap-3">
   <button className="px-4 rounded-full font-primary bg-green text-white py-1">Download</button>
    <button className="font-primary text-green border border-green rounded-full py-1 px-4">Edit</button>
    <button className="font-primary text-green border border-green rounded-full py-1 px-4">Delete</button>
    </div>
         </div>
  );
}

export default CandidateDataList;
