import React from 'react';

function UploadDocuments() {
  return (
      <div className="w-full flex items-center justify-center flex-col border border-border-col boxShadow bg-white rounded-lg p-4 2xl:py-10 sm:py-4">
       <p className="text-sm font-semibold font-primary">Upload a document</p>
       <div className=" flex items-center justify-center flex-col">
         <input type="file" className="w-16 opacity-0 relative top-16 cursor-pointer" />
         <div className="border border-border-col bg-white w-16 rounded-lg h-20 flex items-center justify-center">
           <img src="https://my.hiringplug.com/img/upload.png" alt="..." className="w-12 cursor-pointer" />
         </div>
         <p className="text-[10px] font-primary text-gray-light w-full text-center">Upload Job</p>
     <p className="text-[10px] font-primary text-gray-light w-full text-center">Only pdf, doc and docx files accepted</p>
     <button className="font-primary text-white flex items-center justify-center rounded-xl py-[2px] mt-7  px-4 bg-green">Go</button>
       </div>
      </div>
  );
}

export default UploadDocuments;
