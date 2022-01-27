import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

function EmployerPanelLayout() {
  return(
    <div className="flex items-center justify-center w-full flex-col gap-6">
      <h3 className="text-3xl font-medium mt-5 w-11/12 text-left font-primary">
      Add Panel User
        </h3>
      <div className="w-11/12 flex items-center justify-center flex-col xl:flex-row">
        
        <div className="xl:w-8/12 flex items-center flex-col justify-center w-full gap-6 bg-white border border-border-col rounded-md pt-10 pb-20 p-5">
          {/* break */}
        <div className="w-full flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">First Name</span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col" />
      <span className="inline-block  text-sm  text-black font-primary">Add first name of the candidate.</span>
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Last Name</span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col" />
      </label> 
       </div>
       {/* break */}
       <div className="w-full flex  justify-center  flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Login Email</span>
      <input type="email" className=" w-full font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col" />
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Roles</span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} />
      </label> 
       </div>
       {/* break */}
       <div className="w-full flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-5 mt-6">
         <Link to="/employer-dashboard" className="font-primary text-[16px] bg-white border border-green px-2 rounded-xl text-green ">Close</Link> <button className="font-primary text-[16px] bg-green text-white  px-2 rounded-xl">Save</button>
</div>
        </div>
        <div className="w-4/12"></div>
      </div>
    </div>
  );
}

export default EmployerPanelLayout;
