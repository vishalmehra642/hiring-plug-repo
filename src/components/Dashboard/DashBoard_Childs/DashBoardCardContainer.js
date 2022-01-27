import React from 'react';
import DashBoardCard from './DashBoardCard';

function DashBoardCardContainer({data}) {
  return (
    <div className="flex items-center justify-center w-full xl:w-6/12 bg-white border border-border-col rounded-lg p-4 flex-col boxShadow">
    <h4 className="font-primary text-sm font-bold text-[#000] text-left w-full">Since your last visit</h4>
    <p className="w-full text-left text-xs font-normal text-gray font-primary">22 hour(s) ago</p>
     <div className="grid grid-cols-2 gap-6 p-3 w-full">
       {data?.map(({words , content , link} , index) => (
       <DashBoardCard  words={words} key={index} content={content} link={link} />
       ))}
      
     </div>
  </div>
  );
}

export default DashBoardCardContainer;
