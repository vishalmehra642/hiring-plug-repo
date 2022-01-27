import React from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../../OptimizedImg/OptimizedImage";

function NotificationCard({ boldPara, middlePara, btn, boldnum, link ,styledName , src , setOpen , PopUp }) {
  return (
    <div className="w-full bg-white border border-border-col rounded-lg p-4 flex items-center justify-center flex-row  boxShadow">
      {src ? <OptimizedImage src={src} alt="..." className="w-[50px]" /> : null}
      <div className='w-full flex items-center justify-center flex-col gap-y-4'>
      {boldPara ? (
        <p className="font-primary text-lg font-semibold w-full text-center break-words">
          {boldPara}
        </p>
      ) : null}
      {middlePara ? (
        <p className="font-primary text-sm font-normal w-full text-center">
          <span className="font-semibold inline-block">
            {boldnum ? boldnum : null}
          </span>{" "}
          {middlePara}{" "} <i className="font-semibold">{styledName ? styledName : null}</i>
        </p>
      ) : null}
      {btn ? (
        <div className="w-full flex items-center justify-center">
          {link ? (
            <Link
              to={link}
              className=" font-primary py-1 px-4 rounded-full text-white bg-green "
            >
              {btn}
            </Link>
          ) : (
            <button className=" font-primary py-1 px-4 rounded-full text-white bg-green" onClick={PopUp ? () => setOpen(true) : null}>
              {btn}
            </button>
          )}
        </div>
      ) : null}
    </div>
    </div>
  );
}

export default NotificationCard;
