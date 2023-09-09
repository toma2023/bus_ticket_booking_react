import Container from "../Container/Container";
import running_bus from "../../../public/running_bus.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" pb-28 city_banner_container relative ">
      <Container>
        <div className="mt-10 md:mt-24 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-[100%]  md:w-[50%] py-10">
            <h2 className="text-5xl font-semibold ">Get Your Ticket Online,</h2>
            <h2 className="text-5xl mt-3 font-semibold">Easy and Safely</h2>
            <button className="mt-10 bg-[#26A85E] px-4 py-2 text-white rounded-md">
              GET TICKET NOW
            </button>
          </div>
          <div className="w-[100%] md:w-[50%] ">
            <p className="text-2xl font-semibold mb-6">Choose Your Ticket</p>
            <div className="p-5 md:p-10 shadow-2xl">
              <div className="mt-7 flex justify-between ">
                <select className="select select-bordered w-[45%] max-w-xs rounded-sm border-[#26A85E]">
                  <option disabled selected>
                    Pickup Point
                  </option>
                  <option>Kansas</option>
                  <option>Dallas</option>
                  <option>Wichita</option>
                  <option>Echo Bass</option>
                  <option>Emi Davenport</option>
                </select>
                <select className="select select-bordered w-[45%] max-w-xs rounded-sm border-[#26A85E]">
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
              <div className="mt-6 w-full ">
                <input
                  type="date"
                  placeholder="Type here"
                  className=" input input-bordered w-full border-[#26A85E]"
                />
              </div>

              <div className="flex items-center justify-center">
                <Link to="/bus/search?fromcity=Kushtia&tocity=Dhaka(Gazipur)&doj=07-Sep-2023&dor=">
                  <button className="mt-10 bg-[#26A85E] px-16 py-2 text-white rounded-md">
                    Find Tickets
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="running_bus_container absolute bottom-0 -right-[200px]">
        <img src={running_bus} alt="" />
      </div>
    </div>
  );
};

export default Banner;
