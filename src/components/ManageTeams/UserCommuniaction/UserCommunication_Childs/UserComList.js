import React, { useState } from 'react';

function UserComList({sub_head , para}) {
  const [notify , setNotify] = useState(true);
  const [email , setEmail] = useState(true);
  const [sms , setSMS] = useState(true);
  const [whatsApp , setWhatsApp] = useState(true);

  const handleNotification = (e) => {
    setNotify(v => !v)
    if(notify === false){
      console.log(e.target.value) 
    }
  };

  const handleEmail = (e) => {
    setEmail(v => !v)
    if(email === false){
      console.log(e.target.value) 
    }
  };

  const handleSMS = (e) => {
    setSMS(v => !v)
    if(sms === false){
      console.log(e.target.value) 
    }
  };

  const handleWhatsApp = (e) => {
    setWhatsApp(v => !v)
    if(whatsApp === false){
      console.log(e.target.value) 
    }
  };
  return (
        <li className="flex items-center justify-center w-full border-b border-border-col pb-2">
    <span className="w-5/12 flex items-center justify-center">
    <span className="w-5/12 flex items-center justify-start pl-4 font-primary  text-sm">1.1</span>
    <span className="w-7/12 flex flex-col items-center justify-start font-primary text-black text-[13px] font-semibold">
        <span className="w-full text-left text-black">{sub_head}</span>
         <span className="text-[11px] font-normal  w-full text-left">{para}</span> </span>
    </span>
    <span className="w-7/12 flex items-center justify-between ">
        <input className=" ml-[44px]" type="checkbox" checked={notify ? true : false} name="notification" onChange={handleNotification}/>
        <input type="checkbox" checked={email ? true : false} name="email" onChange={handleEmail}/>
        
        <input type="checkbox" checked={sms ? true : false} name="sms" onChange={handleSMS}/>
        
        <input type="checkbox" checked={whatsApp ? true : false} name="whatsapp" onChange={handleWhatsApp}/>
        
        <span></span>
    </span>
    </li>
  );
}

export default UserComList;
