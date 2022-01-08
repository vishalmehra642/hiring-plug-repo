import React from "react";

function SideCard() {
  return (
    <div className="flex items-center flex-col justify-center border border-gray-400 rounded-xl w-11/12 md:w-8/12 px-4 py-8 gap-y-4">
      <h3 className="font-medium text-base">Mobile notifications</h3>
      <p className="font-normal text-sm">Never miss an important update</p>
      <button className="rounded-full  py-2 px-5 text-white bg-green-600">
        Verify
      </button>
    </div>
  );
}

export default SideCard;
