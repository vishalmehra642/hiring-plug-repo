import React from 'react';

function SelectTitle() {
  return (
    <div className="w-full flex items-center justify-center flex-col border border-border-col boxShadow bg-white rounded-lg p-4 2xl:py-10 sm:py-4">
    <p className="text-sm font-semibold font-primary mb-7">Search a Job Title   </p>
    <input type="text" className="w-full h-9 my-7 rounded-sm  border border-border-col text-xs px-4 text-black font-primary" placeholder="Select By JobTitle" />
    <button className="font-primary text-white flex items-center justify-center rounded-xl py-[2px] mt-8  px-4 bg-green">Go</button>
   </div>
  );
}

export default SelectTitle;
