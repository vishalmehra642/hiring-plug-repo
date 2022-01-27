import React , {useState} from "react";
import Select from "react-select";
import NotificationCard from "../../Dashboard/DashBoard_Childs/NotificationCard"
import TicketPopUp from "../../PopUps/TicketPopUp";

function HelpLayout() {
  const [open , setOpen] = useState(false)
  return (
    <div className="w-full flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center w-11/12 flex-col">
        <h3 className="text-left w-full mt-4 text-3xl  font-primary font-medium mr-7 whitespace-nowrap">
          Help
        </h3>
        <TicketPopUp open={open} setOpen={setOpen} />
      </div>
      <div className="flex items-center justify-center w-[95%] flex-col xl:flex-row gap-6">
          <div className="flex items-center w-full xl:w-8/12 justify-center rounded-lg gap-6 flex-col ">
              <div className="flex items-center justify-center gap-6 flex-col xl:flex-row w-full">
              <input className='w-full xl:w-8/12 border-none h-[40px] px-4' placeholder="Search for anything... "  />
              <Select  className="border-none w-full xl:w-4/12" />
              </div>
             
              <div className="flex items-center justify-start gap-6 flex-col xl:flex-row w-full">
              <Select  className="border-none w-full xl:w-4/12" />
              <Select  className="border-none w-full xl:w-4/12" />

              </div>
          </div>
          <div className="flex items-center w-full xl:w-4/12 justify-center  p-4 rounded-lg">
          <NotificationCard
          PopUp
          setOpen={setOpen}
              middlePara="Raise a help ticket."
              btn="+ Ticket"
            />  
          </div>
      </div>
    </div>
  );
}

export default HelpLayout;
