import React ,{useState} from 'react';
import Select from "react-select"
import NotificationCard from '../../Dashboard/DashBoard_Childs/NotificationCard';
import InvitePopUp from '../../PopUps/InvitePopUp';
import MobileNotificationPopUp from '../../PopUps/MobileNotificationPopUp';
import AgenciesCard from './AgenciesCard';
function AgenciesLayout() {
  const [open  , setOpen] = useState(false);
  const [notifyOpen , setNotifyOpen] = useState(false);

  return (
     <div className="w-full flex items-center justify-center">
       <div className="flex w-11/12 items-center justify-center flex-col gap-6">
       <h3 className="text-left w-full text-3xl mt-5 font-primary font-medium">
       Engaged Agencies
        </h3>
        <MobileNotificationPopUp open={notifyOpen} setOpen={setNotifyOpen} />
        <div className="flex items-start justify-center w-full gap-6 flex-col xl:flex-row">
        <div className="w-full xl:w-8/12 flex items-center justify-center flex-col border border-border-col bg-white px-[5px] py-10 rounded-lg boxShadow gap-6">
          {/* break */}
          <p className="text-sm font-primary mr-auto text-left border-b-2 border-green px-2 py-1">Engaged [143]</p>
          {/* break */}
          <div className="flex w-full items-center justify-evenly border-y flex-wrap border-border-col py-3">
            <InvitePopUp open={open} setOpen={setOpen} />
             <label className="flex items-center justify-center text-[16px] font-primary gap-2">
             <input type="checkbox" />
           <span className="mt-1">  Select All</span>
             </label>
             <Select className="w-6/12" />
             <button className="bg-green px-6 py-1 rounded-full text-white font-primary">Go</button>
          </div>
          {/* break */}
         <AgenciesCard /><AgenciesCard /><AgenciesCard /> 
          {/* break */}
        </div>
       <div className="w-full xl:w-4/12 flex items-center justify-center flex-col  p-4 gap-6">
       <NotificationCard
              boldPara="Mobile notifications"
              middlePara="Never miss an important update"
              btn="Verify"
              PopUp
              setOpen={setNotifyOpen}
            />
             <NotificationCard
              PopUp
              setOpen={setOpen}
              middlePara="Invite your existing partner."
              btn="invite"
            />
             <NotificationCard
              src="https://my.hiringplug.com/img/bulb.gif"
              boldPara="Add Users"
              middlePara="Up to 10 users* "
              btn="Add Users"
              link="/employer-panel-user-details"
            />
            </div> 
        </div>
       
       </div>
 
     </div>
  );
}

export default AgenciesLayout;
