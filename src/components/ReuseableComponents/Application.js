import React from "react";

function Application({index ,percentage  , count}) {
  return (
    <div
      className=" w-full flex items-center justify-start flex-col mb-4"
      key={index}
    >
      <div
        className={` w-${percentage} mb-1 rounded-full mr-auto bg-green-600 h-6`}
      ></div>
      <h1 className="w-full text-left">{count}</h1>
    </div>
  );
}

export default Application;
