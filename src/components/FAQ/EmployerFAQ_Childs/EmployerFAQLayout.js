import React , {useState} from "react";
import NotificationCard from "../../Dashboard/DashBoard_Childs/NotificationCard";
import { FAQ_Data } from "../config";

function EmployerFAQLayout() {
    const [open , setOpen] = useState(null)
    const handletoggle = (id) => {
        if(open === id){
          return  setOpen(null)
        }

        setOpen(id)
    }

  return (
    <div className="flex w-full items-center justify-center flex-col gap-6">
      <div className="w-11/12 flex-col md:flex-row flex items-center justify-start my-4">
      <h3 className="text-left w-full xl:w-2/12 md:4/12 text-3xl mt-5 font-primary font-medium">
      FAQ
        </h3>
      </div>
      <div className="flex items-start justify-center xl:flex-row flex-col w-11/12 gap-6">
          <div className="flex items-center justify-center gap-6 w-full flex-col xl:w-8/12">
              {FAQ_Data?.map(({head , id , para}) => (
           <div className="w-full border border-border-col bg-white flex items-center justify-center p-5 rounded-lg flex-col gap-6"  >
           <div className=" cursor-pointer w-full flex items-center justify-between"  onClick={() => handletoggle(id) }>
           <h6 className="text-[13px] font-primary font-semibold">{head}</h6>
           <p className="text-[19.2px] font-primary text-green cursor-pointer p-1">View Details</p>
           </div>
            <p className={`${open === id ? "content show" : "content"} new-line  w-full text-left text-sm font-primary`}>{para}</p> 
          </div>
              ))}
          </div>
          <div className="flex items-center justify-center gap-6 w-full xl:w-4/12 flex-col">
          <NotificationCard
              middlePara="Learn more about "
              styledName="Intelli-Match."
              btn="Add Users"
            />
            <NotificationCard
              middlePara="Post a new Job. "
              btn="Post A Job"
              link="/post-job"
            />
          </div>
      </div>
    </div>
  );
}
 
// export default AnimatedMount({
//     unmountedStyle: {
//       opacity: 0,
//       transform: 'translate3d(-100px, 0, 0)',
//       transition: 'opacity 250ms ease-out, transform 250ms ease-out',
//     },
//     mountedStyle: {
//       opacity: 1,
//       transform: 'translate3d(0, 0, 0)',
//       transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
//     },
//   })();

export default EmployerFAQLayout;
