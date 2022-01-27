import React , {useState} from 'react';
import Select from 'react-select';
import Switch from '../../../assets/buttons/Switch';
import {FormAssets} from '../config'

function PostForm({setJobForm}) {
    const [checked , setChecked] = useState(false)

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const JobTypeOptions = [
      { value: 'Full Time', label: 'Full Time' },
      { value: 'Part Time', label: 'Part Time' },
      { value: 'Contract', label: 'Contract' },
  
    ]
  
    const customStyles = {
      control: base => ({
        ...base,
        height: 40
      })
    };
  return (
    <form className="w-11/12 border border-border-col rounded-lg py-4 bg-white flex-col flex items-center justify-center gap-y-6">
    <label className="flex items-center justify-center flex-col w-full ">
    <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Job Title <span className="text-red">*</span></span>
      <input type="text" placeholder="Enter Job Title" className="w-[95%] font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col" />
    </label>
    {/* break */}
    <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Department <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={options} placeholder="--Select Department--" styles={customStyles} />
      </label>
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Grade</span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>     
       </div>
       {/* break */}
       <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Job Reference ID</span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Job Type <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"   defaultValue={{ value: 'Full Time', label: 'Full Time' }}  options={JobTypeOptions} styles={customStyles} />
      </label> 
       </div>
       {/* break */}
       <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Country <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: 'India', label: 'India' }} styles={customStyles} options={JobTypeOptions}/>
      </label> 
      <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Location <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={JobTypeOptions} placeholder="--Select City--" styles={customStyles} />
      </label> 
       <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Number of Position(s) <span className="text-red">*</span></span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>    
       </div>
       {/* break */}
       {/* break */}
       <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Experience Level <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      <span className="inline-block  text-sm ml-3 text-black font-primary">From(years)</span>
      </label> 
      <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold"></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={JobTypeOptions} defaultValue={{ value: '0', label: '0' }} styles={customStyles} />
      <span className="inline-block  text-sm ml-3 text-black font-primary">To(years)</span>
      </label> 
       <label className="lg:w-4/12 w-full flex items-center justify-center flex-row">
      <input type="checkbox" className=" mr-3" />
      <span className=" w-[95%] inline-block font-primary text-sm font-normal">Management experience required</span>
      </label>    
       </div>
       {/* break */}
       <div className="w-[95%] flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Max Age for Candidate</span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"   defaultValue={{ value: 'Full Time', label: 'Full Time' }}  options={JobTypeOptions} styles={customStyles} />
      <span className="inline-block  text-sm ml-3 text-black font-primary">(years)</span>
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Preferred Gender </span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"   defaultValue={{ value: 'Full Time', label: 'Full Time' }}  options={JobTypeOptions} styles={customStyles} />
      </label> 
       </div>
       {/* break */}
       <div className="w-[95%] flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Mandatory Skills <span className="text-[10px] font-normal"> (Add Only the Must-have skills here. Min of 3 skills) <span className="text-red">*</span></span> </span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Additional Skills</span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label> 
       </div>
       {/* break */}
       <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Add Qualification/Education <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      </label> 
      <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Add Course/Degree</span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      </label> 
      <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Add Specialization</span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      </label>   
       </div>
       {/* break */}
       <div className="w-[95%] flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Required Percentage/CGPA </span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Comment(About Education)</span>
      <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label> 
       </div>
       {/* break */}
       <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-3/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Annual CTC <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      <span className="inline-block  text-sm ml-3 text-black font-primary">Currency</span>
      </label> 
      <label className="lg:w-3/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold"></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      <span className="inline-block  text-sm ml-3 text-black font-primary">From</span>
      </label> 
      <label className="lg:w-3/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold"></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"  defaultValue={{ value: '0', label: '0' }} styles={customStyles} options={JobTypeOptions}/>
      <span className="inline-block  text-sm ml-3 text-black font-primary">To</span>
      </label> 
      <label className="lg:w-3/12 w-full flex flex-row items-center justify-center lg:mt-5">
      <input type="checkbox" className=" mr-3" />
      <span className="w-[95%] inline-block font-primary text-sm font-normal">Negotiable further </span>
      </label>   
       </div>
       {/* break */}
       <div className="w-[95%] bg-base border border-gray-dark rounded-[4px] flex items-center justify-center py-6 flex-col gap-6">
       <div className="w-[95%] flex  justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Recruitment Fee <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"   defaultValue={{ value: 'Full Time', label: 'Full Time' }}  options={JobTypeOptions} styles={customStyles} />
      <span className="inline-block  text-xs ml-1 text-gray-light font-primary">"%" is the percentage of annual gross compensation package of the hired candidate.
                        <br/>"Fixed" it is an amount offered to hire a candidate.</span>
      </label>    
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Recruitment Fees in Percentage <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm"   defaultValue={{ value: 'Full Time', label: 'Full Time' }}  options={JobTypeOptions} styles={customStyles} />
      <span className="inline-block  text-xs ml-1 text-gray-light font-primary">Unsure about the right recruitment fee for this job? Talk to us at contact@hiringplug.com or click here.</span>
      </label> 
       </div>
       {/* break */}
       <label className="flex items-center justify-center flex-col w-full ">
    <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Commercial Comment</span>
      <input type="text" placeholder="Add Commercial Details" className="w-[95%] font-primary text-sm h-10 rounded-[4px] px-4 border border-border-col" />
    </label>
    {/* break */}
    <div className="w-[95%] flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Guarantee Period  <span className="text-red">*</span></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={options} placeholder="--Select Department--" styles={customStyles} />
      </label>
      <label className="lg:w-6/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Desired Joining Date</span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label>     
       </div>
       {/* break */}
       <div className="w-[95%] flex items-end justify-center flex-col lg:flex-row gap-y-4 gap-x-10">
       <label className="lg:w-5/12 w-full">
           <span className="w-full text-green text-left font-primary">Screening Questions (Optional)</span>
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Question: </span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label> 
      <label className="lg:w-4/12 w-full">
      <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold"></span>
      <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={options} placeholder="--Select Department--" styles={customStyles} />
      </label> 
      <label className="lg:w-3/12 w-full flex flex-row items-center justify-center lg:mb-3">
      <input type="checkbox" className=" mr-3" />
      <span className="w-[95%] inline-block font-primary text-sm  font-normal">Negotiable further </span>
      </label>   
       </div>
       </div>
       {/* div break */}
       <div className="w-[95%] flex items-center justify-between flex-col lg:flex-row gap-4">
      <div className="flex items-center justify-between">
        <Switch checked={checked} setChecked={setChecked} />
        <p className="text-[16px] font-primary ml-3">Do you want to mark this job an urgent Job ?</p>
      </div>
      <label className="lg:w-6/12 w-full flex flex-col items-center justify-center lg:mt-5">
          <span className="mb-2 w-full  inline-block font-primary text-sm font-semibold">Assign recruiter(s) for this job</span>
      <input type="text" placeholder="Enter Job Title" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      <span className="w-full text-green mt-2 inline-block font-primary text-sm font-normal"> + Add a new recruiter / Point of contact</span>
      </label> 
    </div>
    {/* break toggle division */}
    {checked ? 
     <div className="w-[95%] flex items-center justify-center gap-4 flex-col">
     <div className="flex items-center justify-center flex-col lg:flex-row w-full gap-4">
     <label className="lg:w-6/12 w-full">
       <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Next Action-1 </span>
       <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={options} placeholder="--Select Department--" styles={customStyles} />
       </label>    
       <label className="lg:w-6/12 w-full">
       <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Next Action-1 Date</span>
       <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
       </label> 
     </div>
     <div className="flex items-center justify-center flex-col lg:flex-row w-full gap-4">
     <label className="lg:w-6/12 w-full">
       <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Next Action-2 </span>
       <Select Searchable  className=" w-full font-primary text-sm h-10 rounded-sm" options={options} placeholder="--Select Department--" styles={customStyles} />
       </label>    
       <label className="lg:w-6/12 w-full">
       <span className="mb-2 w-[95%] inline-block font-primary text-sm font-semibold">Next Action-2 Date</span>
       <input type="text" className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
       </label> 
     </div>
     </div>
    : null}
   
    {/* break */}
    <div className="w-[95%] flex items-center justify-start flex-col gap-5">
    <p className="font-primary text-[16px] font-semibold w-full text-left">Diversity Hiring <span className="font-normal">(Click to select whatever is permissible for this job)</span> </p>
    <div className="w-full xl:w-6/12 flex items-center justify-between flex-wrap mr-auto gap-3 lg:ml-6">
        {FormAssets?.map(({img_src , head},index) => (
            <div className="flex items-center justify-center flex-col gap-y-4" key={index}>
            <p className="font-normal font-primary text-[10px]">{head}</p>
            <img src={img_src}  alt={head} className="w-12"/>
        </div>
        ))}
    </div>
    </div>
    {/* break */}
    <div className="w-[95%] flex items-center justify-start flex-col lg:flex-row gap-4">
    <label className="lg:w-6/12 w-full flex flex-col items-center justify-center lg:mt-5">
          <span className="mb-2 w-full  inline-block font-primary text-sm font-semibold">Churn Period</span>
      <input type="number"  className=" w-full font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
      </label> 
      <div className="flex items-center justify-center flex-col gap-y-6">
          <div className="w-full flex items-center justify-start flex-row gap-4">
              <p className="w-5 h-5 bg-btn-gray"></p>
              <p className="font-primary text-lg ">Gender must be provided</p>
          </div>
          <div className="w-full flex items-center justify-start flex-row gap-4">
              <p className="w-5 h-5 bg-btn-gray"></p>
              <p className="font-primary text-lg ">Confidential Position</p>
          </div>
      </div>
    </div>
    {/* break */}
    <div className="w-[95%] flex items-center justify-start">
    <div className="flex w-11/12 xl:w-6/12 items-center justify-center flex-col bg-white border border-border-col rounded-lg p-4 gap-y-10">
        <p className="text-sm font-primary text-left w-full font-semibold gap-y-8">
        Upload Document <span className="text-xs font-normal"> (Format: pdf, txt, xls, xlsx, csv, doc, and docx)</span>
        </p>
   <div className="w-full xl:w-10/12 flex items-center justify-center flex-col gap-y-4">
       <input type="file" className="mr-auto" />
       <input type="text" placeholder="Enter Document Name"  className=" w-full  font-primary text-sm h-10 rounded-sm px-4 border border-border-col" />
   </div>
    </div>
    </div>
    {/* break */}
    <div className="w-[95%] flex items-center justify-start flex-row">
   <input type="checkbox" className="mr-3" />
   <p className="text-[16px] font-primary">Save as a Template</p>
    </div>
   {/* break */}
   <div className="w-[95%] flex items-center justify-end">
     <div className="flex items-center justify-center gap-6 lg:mt-5 lg:mb-9">
       <button onClick={() => setJobForm(false)} className="text-green border border-green rounded-xl bg-white font-primary font-light px-3 text-sm">Go Back</button>
       <button className="text-sm py-[2px] font-primary font-normal  bg-green text-white px-3 rounded-xl">Save As Draft</button>
     </div>
   </div>
   </form>
  );
}

export default PostForm;
