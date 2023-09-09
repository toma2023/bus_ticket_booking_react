import React from "react";
import Filter from "../Filter/Filter";
import BusSchedule from "../BusSchedule/BusSchedule";

const FindTcket = () => {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" w-[80%] md:p-10 ">
        <div className="  bottom-1/2 right-3/2 bg-[#FFFFFF] mb-5 p-5 shadow-2xl h-[150px] grid items-center justify-center grid-cols-4">
          <div>
            <select className="select select-bordered  w-[90%] rounded-sm border-[#26A85E]">
              <option disabled selected>
                Pickup Point
              </option>
              <option>Kansas</option>
              <option>Dallas</option>
              <option>Wichita</option>
              <option>Echo Bass</option>
              <option>Emi Davenport</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered  w-[90%] rounded-sm border-[#26A85E]">
              <option disabled selected>
                Dropping Point
              </option>
              <option>Kansas</option>
              <option>Dallas</option>
              <option>Wichita</option>
              <option>Echo Bass</option>
              <option>Emi Davenport</option>
            </select>
          </div>

          <div>
            <input
              type="date"
              placeholder="Type here"
              className=" input input-bordered w-[90%] border-[#26A85E]"
            />
          </div>
          <div className="">
          <button className=" bg-[#26A85E] w-full text-white px-4 py-2 rounded-sm">
            Select Select
          </button>
        </div>
        </div>

        
        <div className="bg-[#F6F6F7] flex items-center gap-10">
          <div className="mt-[25px] w-[20%] shadow-2xl">
            <Filter />
          </div>
          <div className=" mt-[25px] w-[75%] ">
            <BusSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTcket;
