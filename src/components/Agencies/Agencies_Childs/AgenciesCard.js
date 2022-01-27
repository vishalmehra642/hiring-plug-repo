import React from 'react';
import OptimizedImage from '../../OptimizedImg/OptimizedImage';

function AgenciesCard() {
  return (
    <div className="flex items-start justify-center w-full border-b border-border-col py-5 gap-6 flex-col">
    {/* break */}
    <div className="w-full flex items-center justify-center gap-4">
    <div className="w-4/12 flex items-start justify-center gap-3">
      <input type="checkbox" />
      <OptimizedImage src="https://my.hiringplug.com/uploads/agency-logo/804697587download.png" alt="..." className="w-[183px]  h-[100px]" />
    </div>
    {/* break */}
    <div className="w-4/12 flex items-center justify-center flex-col gap-2">
      <h5 className="font-primary text-[16px] w-full text-left font-semibold">VR Consulting Inc.</h5>
      <div className="w-full">
      <p className="text-xs font-primary w-full text-left font-semibold">Industries</p>
      <p className="text-xs font-primary w-full text-left ">BFSI,Computer Services,FinTECH,Information Technology,Software (System & Application),</p>
      </div>
     <div className="w-full">
     <p className="text-xs font-primary w-full text-left font-semibold">Experience</p>
      <p className="text-xs font-primary w-full text-left ">7 Yrs</p>
     </div>
     
    </div>
    {/* break */}
    <div className="w-4/12 flex items-center justify-center flex-col gap-2">
    <div className="w-full">
    <p className="text-xs font-primary w-full text-left "> Bengaluru Karnataka</p>
      <p className="text-xs font-primary w-full text-left font-semibold">Location</p>
      </div>
      <p className="text-xs font-primary w-full text-left font-semibold">Rating</p>
      
     <div className="w-full">
     <p className="text-xs font-primary w-full text-left font-semibold"></p>
      <p className="text-xs font-primary w-full text-left "></p>
     </div>
     
    </div>
    </div>
    <div className="w-full flex items-center justify-center flex-col px-4">
    <p className="text-xs font-primary w-full text-left font-semibold">Description</p>
    <p className="text-xs font-primary w-full text-left ">AmpersandSquare offers holistic service breadth for talent management support, with custom-built approaches and extensive technology integration to support its on-ground expertise and PAN-India infrastructure.</p>
    </div>
   
    {/* break */}

  </div>
  );
}

export default AgenciesCard;
