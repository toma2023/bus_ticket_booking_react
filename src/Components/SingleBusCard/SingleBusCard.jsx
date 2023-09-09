import React from "react";
import { FaArrowRight, FaBus } from "react-icons/fa";
import {} from "react-icons/fa";

const SingleBusCard = ({busName,busType, startingTime, arrieveTime, offDay}) => {
  return (
    <div >
      <div className=" grid grid-cols-3 items-center ">
        <div className="p-4 flex flex-col  gap-3">
          <h2 className=" text-2xl font-semibold">AC - Kansas - Echo Bass</h2>
          <p className="py-2 text-[#8E8E8E]">Seat Layout - 2 x 2</p>
          <div className="text-[#E9BA11] rounded-sm flex items-center gap-3">
            <FaBus />
            <p>{busType}</p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-6">
          <div >
            <h4 className="text-2xl font-semibold">08:00 AM </h4>
            <p className="text-[#969696] py-2">Kansas</p>
          </div>
          <div>
            <FaArrowRight className="w-[25px] h-[25px] text-[#26A85E]"></FaArrowRight>
            <p className="text-[#969696] py-2">08:30 min</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">03:00 AM </h4>
            <p className="text-[#969696] py-2">Echo Bass</p>
          </div>
        </div>
        <div>
          <div className="p-4 flex flex-col items-center gap-3">
            <h4 className="text-2xl font-semibold">$100.00 </h4>
            <p >Off Days: <span className="bg-[#EAE8FD] px-2 border-[#7A6FF1] py-1 rounded-md text-[#7A6FF1]">Friday</span> </p>
            <button className=" bg-[#26A85E] w-[50%] text-white px-4 py-2 rounded-sm">Select Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBusCard;
