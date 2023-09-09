import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import React from "react";
import { BiBusSchool } from "react-icons/bi";
import {  FaRegClock } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Filter </h1>
        <p>Reset All</p>
      </div>
      <div class="border-t border-[#E8E9EB] my-4"></div>
      <div>
        <h1 className="text-2xl font-semibold pb-4">Vehicle Type</h1>
        <div className="flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <BiBusSchool />
            <p>Classic</p>
          </div>
        </div>
        <div className="py-3 flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <BiBusSchool />
            <p>Coach</p>
          </div>
        </div>
        <div className="pb-3 flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <BiBusSchool />
            <p>Ac</p>
          </div>
        </div>
      </div>
     
        
      
      <div class="border-t border-[#E8E9EB] my-4"></div>
      <div>
        <h1 className="text-2xl font-semibold pb-4">Routes</h1>
        <div className="flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <BiBusSchool />
            <p> Kansas to Echo Bass</p>
          </div>
        </div>
        <div className="py-3 flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <BiBusSchool />
            <p>Witchita to Echo Bass</p>
          </div>
        </div>
       
      </div>
      <div class="border-t border-[#E8E9EB] my-4"></div>
      <div>
        <h1 className="text-2xl font-semibold pb-4">Schedules</h1>
        <div className="flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
            <FaRegClock />
            <p> 06am-03.30pm</p>
          </div>
        </div>
        <div className="py-3 flex items-center gap-2">
          <Checkbox {...label} />
          <div className="bg-[#F6F6F7] p-2 rounded-sm flex items-center gap-3">
          <FaRegClock />
            <p> 06am-03.30pm</p>
          </div>
        </div>
       
      </div>

    </div>
  );
};

export default Filter;
