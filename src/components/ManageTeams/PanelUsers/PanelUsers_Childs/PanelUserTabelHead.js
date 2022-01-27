import React from 'react';

function PanelUserTabelHead() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-1 bg-light-gray-table">
    <p className="font-primary font-semibold text-sm w-4/12 flex items-center justify-start">
    Name
  </p>
  <p className="font-primary font-semibold text-sm w-2/12 flex items-center justify-start">
  Role
  </p>
  <p className="font-primary font-semibold text-sm w-2/12 flex items-center justify-start">
  Alloted Jobs
  </p>
  <p className="font-primary font-semibold text-sm w-2/12 flex items-center justify-start">
  Fulfilled
  </p>
  <p className="font-primary font-semibold text-sm w-2/12 flex items-center justify-start">
  Actions
  </p>
    </div>
  );
}

export default PanelUserTabelHead;
