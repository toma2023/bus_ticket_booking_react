import React from "react";
import { FaArrowRight, FaBus } from "react-icons/fa";
import {} from "react-icons/fa";
import SingleBusCard from "../SingleBusCard/SingleBusCard";

const BusSchedule = () => {
  return (
    <div className="  p-5  bg-[#FFFFFF]">
     <SingleBusCard busType={"nonAc"} busName={"kakatua"} startingTime={5} arrieveTime={8}offDay={"friday"} />
    </div>
  );
};

export default BusSchedule;
