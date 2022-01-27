import React from 'react';
import Select from 'react-select';
function SelectTemplate() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className="w-full flex items-center justify-center flex-col border border-border-col boxShadow bg-white rounded-lg p-4 2xl:py-10 sm:py-4">
    <p className="text-sm font-semibold font-primary mb-7">Select a template</p>
      <Select className="w-full my-7 overflow-x-visible h-10 text-xs font-primary" options={options} />
    
    <button className="font-primary text-white flex items-center justify-center rounded-xl py-[2px] mt-7  px-4 bg-green">Go</button>
   </div>
  );
}

export default SelectTemplate;
