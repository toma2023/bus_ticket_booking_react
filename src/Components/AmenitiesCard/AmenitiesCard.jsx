import React from "react";
import { HiWifi } from "react-icons/hi";

const AmenitiesCard = () => {
  return (
    <div className="py-14 grid gap-5 grid-cols-4">
      <div className=" shadow-lg  flex flex-col items-center justify-center rounded-md px-[30px] py-[25px] ">
        <div className="hover:text-[#26A85E]">
          <HiWifi className="text-[#757575] w-[80px] h-[80px]" />
          <div class="border-t text-[#757575] border-[#757575] my-2">
            <p className="py-2 text-center">Wifi</p>
          </div>

        </div>
      </div>
      <div className=" shadow-lg  flex flex-col items-center justify-center rounded-md px-[30px] py-[25px] ">
        <div className="hover:text-[#26A85E]">
          <HiWifi className="text-[#757575] w-[80px] h-[80px]" />
          <div class="border-t text-[#757575] border-[#757575] my-2">
            <p className="py-2 text-center">Pillow</p>
          </div>

        </div>
      </div>
      <div className=" shadow-lg  flex flex-col items-center justify-center rounded-md px-[30px] py-[25px] ">
        <div className="hover:text-[#26A85E]">
          <HiWifi className="text-[#757575] w-[80px] h-[80px]" />
          <div class="border-t text-[#757575] border-[#757575] my-2">
            <p className="py-2 text-center">Water Bottle</p>
          </div>

        </div>
      </div>
      <div className=" shadow-lg  flex flex-col items-center justify-center rounded-md px-[30px] py-[25px] ">
        <div className="hover:text-[#26A85E]">
          <HiWifi className="text-[#757575] w-[80px] h-[80px]" />
          <div class="border-t text-[#757575] border-[#757575] my-2">
            <p className="py-2 text-center">Soft Drinks</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AmenitiesCard;
