import React from 'react';

function Switch({checked , setChecked}) {
  return (
    <div className="flex justify-center">
      <div className={` ${checked ? "bg-green" : "bg-btn-gray"} w-16  h-9 rounded-full flex items-center`} onClick={() => setChecked(v => !v)}>
          <div className={`${checked ? "translate-x-8 transition-all duration-300" : "translate-x-1 transition-all duration-300"} w-7 h-7 rounded-full bg-white cursor-pointer`}></div>
      </div>
  </div>
  );
}

export default Switch;
