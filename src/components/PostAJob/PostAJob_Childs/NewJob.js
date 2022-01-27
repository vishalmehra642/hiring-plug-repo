import React from 'react';
function NewJob({setJobForm}) {
  return (
    <div className="w-full flex items-center justify-center flex-col border border-border-col boxShadow bg-white rounded-lg p-4 2xl:py-10 sm:py-4">
    <p className="text-sm font-semibold font-primary mb-7">Select a template</p>
    <p className="h-9 my-7 rounded-sm w-full text-center text-sm px-4 text-black font-primary">Start with a blank form.</p>
    <button onClick={() => setJobForm(true)} className="font-primary text-white flex items-center justify-center rounded-xl py-[2px] mt-8  px-4 bg-green">Go</button>
   </div>
  );
}

export default NewJob;
