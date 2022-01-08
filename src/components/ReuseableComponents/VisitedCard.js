import React from "react";

function VisitedCard({index , num , data}) {
  return (
    <div
      className=" border border-gray-400 rounded-xl h-36 flex items-center justify-center flex-col"
      key={index}
    >
      <h3 className="font-light text-[60px]">{num}</h3>
      <p className="text-xs">{data}</p>
    </div>
  );
}

export default VisitedCard;
