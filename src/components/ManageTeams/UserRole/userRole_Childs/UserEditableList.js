import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt , faTimes , faEdit} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';


const UserEditableList = ({data , id}) => {
   let history =  useHistory()
  return (
    <div className="w-full flex items-center justify-between border-b border-border-col  bg-white py-4 px-2">
    <p className="font-primary  text-sm w-3/12 flex items-center justify-start">Admin</p>
    <p className="font-primary  text-sm w-3/12 flex items-center justify-start">main user of a company</p>
    <p className="font-primary  text-sm w-3/12 flex items-center justify-start">Active</p>
    <p className="font-primary  text-[16px] gap-4 w-2/12 flex items-center justify-start">
        <FontAwesomeIcon icon={faTimes} className="cursor-pointer" />
        <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => history.push(`/employer-user-role-details/${id}`)} />
        <FontAwesomeIcon icon={faTrashAlt} className="cursor-pointer" />

    </p>
</div>
  );
};

export default UserEditableList;
