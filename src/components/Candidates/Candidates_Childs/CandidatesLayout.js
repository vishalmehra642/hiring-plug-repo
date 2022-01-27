import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import Board from 'react-trello'
import {data} from '../config'

function CandidatesLayout() {
  return (
    <div className="w-full flex items-center justify-center">
    <div className="w-full flex items-center justify-center flex-col gap-5">
      <div className="w-11/12 justify-start flex-col lg:flex-row flex items-center gap-x-10 gap-y-5 mt-5">
        <h3 className="text-left md:4/12 text-3xl  font-primary font-medium mr-7 whitespace-nowrap">
        Candidates
        </h3>
        <label className="max-w-4xl w-full flex">
          <input
            type="text"
            className=" font-primary px-4 w-full h-9 border border-border-col rounded-tl-[4px] rounded-bl-[4px]"
            placeholder="Start typing to search by Name, Email or Mobile Number"
          />
          <button className="bg-green rounded-tr-[4px] rounded-br-[4px] px-3 h-9">
            <FontAwesomeIcon className="text-xl text-white" icon={faSearch} />
          </button>
        </label>
        <div className="flex items-center justify-center w-10 h-10 rounded-md text-xl cursor-pointer text-white bg-border-col">
          <FontAwesomeIcon icon={faFilter} />
        </div>
      </div>
      {/* break */}
     
      {/* main layout */}
      <div className="w-[95%] gap-5 flex items-start justify-center overflow-x-scroll">
    
      {/* <Board data={data} draggable /> */}
      </div>
      {/* main layout */}
    </div>
  </div>
  );
}

export default CandidatesLayout;
