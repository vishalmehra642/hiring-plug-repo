import React from 'react';
import { Link } from 'react-router-dom';

function DashBoardCard({words , content , link}) {
  
  return (
    <Link to={link} className="box_shadow_card cursor-pointer bg-white border border-green rounded-lg w-full p-4 min-h-[123px] h-full" >
    <h6 className="lg:text-5xl text-3xl font-normal font-primary w-full text-center break-words">{words}</h6>
    <p className="w-full text-center break-words text-xs mt-2 text-black">{content}</p>
   </Link>
  );
}

export default DashBoardCard;
