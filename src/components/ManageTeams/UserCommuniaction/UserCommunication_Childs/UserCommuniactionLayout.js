import React  from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-regular-svg-icons"
import UserComList from "./UserComList";
import { UserList } from "../config";
function UserCommuniactionLayout() {

  return(
      <div className="w-full flex items-center justify-center flex-col ">
          <div className="w-11/12 flex items-center justify-center flex-col">
              <div className="flex items-center justify-start w-full flex-col mb-5">
                  <p className="text-sm w-full text-left font-primary  mt-5">Manage Team/User Communications</p>
                  <h3 className="text-3xl w-full text-left font-primary font-medium ">User Communications</h3>
              </div>
              <div className="flex items-center justify-center w-full rounded-lg bg-white p-4 flex-col gap-4 boxShadow">
                  {/* break */}
                  <div className="flex items-center justify-around w-[95%] border-2 border-border-col rounded-sm p-2">
                      <p className="font-primary text-[16px]">Vishal Mehra</p>
                      <p className="font-primary text-[16px]">vishal@hiringplug.com<FontAwesomeIcon icon={faEdit}  className="text-green ml-2"/>  </p>
                      <FontAwesomeIcon icon={faEdit}  className="text-green"/>
                  </div>
                  {/* break */}
                  <div className="flex items-center justify-center w-full border-y border-border-col py-1">
                      <div className="w-5/12 flex items-center justify-center">
                      <div className="w-5/12 flex items-center justify-start pl-4 font-primary text-gray-light text-xs font-semibold">S. NO.</div>
                      <div className="w-7/12 flex items-center justify-start font-primary text-gray-light text-xs font-semibold">RIGHTS</div>
                      </div>
                      <div className="w-7/12 flex items-center justify-between ">
                          <p className="font-primary text-gray-light text-xs font-semibold">NOTIFICATION</p>
                          <p className="font-primary text-gray-light text-xs font-semibold">EMAIL  </p>
                          <p className="font-primary text-gray-light text-xs font-semibold">SMS</p>
                          <p className="font-primary text-gray-light text-xs font-semibold">WHATSAPP</p>
                          <p></p>
                      </div>
                  </div>
                  {/* break */}
                  {UserList?.map(({s_no , head , list}, index) => (
                      <div className="w-full" key={index}>
                      <div className="flex items-center justify-center w-full border-b border-border-col pb-2">
                      <div className="w-5/12 flex items-center justify-center">
                      <div className="w-5/12 flex items-center justify-start pl-4 font-primary  text-sm ">{s_no}</div>
                      <div className="w-7/12 flex items-center justify-start font-primary text-green text-sm font-semibold">{head}</div>
                      </div>
                      <div className="w-7/12 flex items-center justify-between ">
                        {/* blank placeholder division */}
                      </div>
                  </div>
                  {/* break */}
                 
                  <ul className="flex items-center justify-center w-full list-disc flex-col gap-4">
                  {list?.map(({sub_head , para} , index) => (
                       <UserComList sub_head={sub_head} key={index} para={para} index={index}  />
                      ))}
                
                 </ul>
                      </div>
                  ))}
                  
                  {/* break */}
              </div>
          </div>
      </div>
  );
}

export default UserCommuniactionLayout;
