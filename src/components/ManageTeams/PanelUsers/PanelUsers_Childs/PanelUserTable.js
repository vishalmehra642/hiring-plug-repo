import React from 'react';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faToggleOn , faChevronDown , faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';


function PanelUserTable({switchToggle , data , id}) {

  let history =  useHistory();

  const {name , role , alloted_Jobs , fulfilled} = data;

  return (
    <div className="w-full flex items-center justify-between px-4 py-4 bg-white border-b border-border-col">
    <div className="font-primary  text-sm w-4/12 flex items-center justify-between">
   <FontAwesomeIcon icon={faToggleOn} className={`${switchToggle ? "text-green" : "text-red rotate-180"}   text-lg`} />
   <div className="w-9/12 flex items-center justify-between" onClick={() => history.push({pathname :`/employer-view-users-summary/${id}`})}>
   <span className="font-primary hover:text-green text-[13px] cursor-pointer">{name}</span>
   <FontAwesomeIcon icon={faChevronDown} className="text-green text-lg mr-20 cursor-pointer" />
   </div>
  </div>
  <p className="font-primary  text-[13px] w-2/12 flex items-center justify-start">
    {role}
  </p>
  <p className="font-primary  text-[13px] w-2/12 flex items-center justify-start">
  {alloted_Jobs}
  </p>
  <p className="font-primary  text-[13px] w-2/12 flex items-center justify-start">
 {fulfilled}
  </p>
  <p className="font-primary  text-[13px] w-2/12 flex items-center justify-end">
  <FontAwesomeIcon icon={faEllipsisV} className="text-gray text-2xl" />
  </p>
    </div>
  );
}

export default PanelUserTable;
