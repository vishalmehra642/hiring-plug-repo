import React , {useState} from 'react'
import { Application_Data, Visit_Data } from '../Main/Config'
import { Nav_Links } from '../Menu/Config'

function Navbar() {
    const [toggle , setToggle] = useState(false)
    const [selected ,setSelected] = useState(0)
    return (
        <div className="flex  justify-center w-full">
            <div className="flex items-center justify-center w-11/12 py-4">
                <div className={` ${toggle ? "hidden"  : "w-2/12"}  flex justify-between items-center flex-col h-full relative`}>
                    <div className="flex items-center justify-between flex-row w-full">
                        <i className="fas fa-bars text-black cursor-pointer text-2xl" onClick={() => setToggle(!toggle)}></i>
                <h1 className="inline-block text-orange-400 pr-10">Logo</h1></div>
                
                <div className="flex flex-row items-center justify-center absolute w-full top-14">
                    <ul className="w-full">
                    {Nav_Links?.map(({links , iconClass} , index) => (
                         <li className={`py-3 pl-2 cursor-pointer ${selected === index ? "bg-blue-100" : ""}`} key={index} onClick={() => setSelected(index)}>
                         <i className={`${iconClass ? iconClass.toString() : ""} text-xl mr-3`}></i>
                         {links}
                         </li>
                    ))}
                    </ul>
                </div>
                </div>
                <div className={`w-10/12  flex items-center flex-col justify-between md:pl-10`}>
                    <div className="w-full flex items-center justify-between">
                    <h1>
                        {toggle ?  <i className="fas fa-bars text-black cursor-pointer text-2xl mr-5" onClick={() => setToggle(!toggle)}></i> : null}
                   
                        <span>Welcome KBPM india Pvt Ltd.</span>
                        </h1>
                    <div className="md:w-2/12 flex items-center justify-between">
                        <button className="w-28 h-8 whitespace-nowrap leading-1 rounded-full bg-green-600 text-white  text-sm  px-4 text-center">Post A job</button>
                        <i className="far fa-comment-alt text-2xl"></i>
                        <i className="far fa-bell text-2xl"></i>
                    </div>
                    </div>
                    <div className="flex w-full mt-16 items-center flex-col justify-center">
                        <h1 className="w-full text-3xl font-semibold mb-4">DashBoard</h1>
                        <div className="w-full justify-center flex">
                            <div className="w-8/12 flex items-center justify-center flex-col">
                              <div className="w-full h-20 rounded-xl border-gray-400 border text-2xl font-normal text-orange-500 flex items-center justify-center">
                                  <h3>Congrats your company has successfully hires 14 candidates </h3>
                                  </div>
                                  <div className="flex w-full  justify-center gap-12 flex-col md:flex-row mt-8">
                                      <div className="md:w-5/12 w-full border border-gray-400 rounded-xl p-5">
                                          <h1 className="text-xl font-sans mb-2">status of applications</h1>
                                          {Application_Data?.map(({count , percentage} , index) => (
                                            <div className=" w-full flex items-center justify-start flex-col mb-4" key={index}>
                                            <div className={` w-${percentage} mb-1 rounded-full mr-auto bg-green-600 h-6`}></div>
                                            <h1 className="w-full text-left">{count}</h1>
                                            </div>
                                          ))}
                                        
                                      </div>
                                      <div className="md:w-5/12 w-full border border-gray-400 rounded-xl p-5">
                                          <div className="flex items-center justify-center flex-col ">
                                              <h2 className="text-base font-medium w-full text-left mb-4">Since your last visits</h2>
                                          <div className="grid w-full grid-cols-2 gap-5">
                                              {Visit_Data?.map(({num , data} , index) => (
                                                <div className=" border border-gray-400 rounded-xl h-36 flex items-center justify-center flex-col" key={index}>
                                                  <h3 className="font-light text-[60px]">{num}</h3>
                                                  <p className="text-xs">{data}</p>
                                              </div>
                                              ))}
                                              
                                          </div>
                                          </div>
                                          
                                      </div>
                                  </div>
                            </div>
                            <div className="w-4/12 flex items-center flex-col">
                                    <div className="flex items-center flex-col justify-center border border-gray-400 rounded-xl w-11/12 md:w-8/12 px-4 py-8 gap-y-4">
                                        <h3 className="font-medium text-base">Mobile notifications</h3>
                                        <p className='font-normal text-sm'>Never miss an important update</p>
                                        <button className="rounded-full  py-2 px-5 text-white bg-green-600">Verify</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
