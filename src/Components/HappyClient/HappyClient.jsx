import React from 'react';
import Container from '../Container/Container';
import { HiGlobeAlt, HiUsers } from "react-icons/hi";
import "./HappyClient.css";

const HappyClient = () => {
    return (
        <div className=" py-16 ">
        <div className="bg-green-200 relative">
          <div className="relative z-10">
            <Container>
              <div className=" md:w-[50%] py-36 flex flex-col items-start gap-4">
                <button className=" bg-[#26A85E] text-white px-5 py-2 rounded-full">
                  Offer Deals
                </button>
                <h2 className="font-semibold text-4xl ">
                  Your Great Destination
                </h2>
                <p className="text-lg">
                  Get rewarded for your travels – unlock instant savings of 10% or
                  more with a free Geairinfo.com account
                </p>
                <div className=" md:flex gap-5 items-center justify-between ">
                  <div className=" flex items-center">
                    <div className="rounded-md bg-white flex gap-20 py-3 px-6 items-center">
                      <div>
                        <h3 className="text-3xl font-semibold">5830+</h3>
                        <p>Happy Customers</p>
                      </div>
                      <div>
                        <HiUsers className="text-[#26A85E] w-[50px] h-[50px]" />
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <div className="mt-4 md:mt-0 rounded-md bg-white flex gap-20 py-3 px-6 items-center">
                      <div>
                        <h3 className="text-3xl font-semibold">100%</h3>
                        <p>Client Satisfied</p>
                      </div>
                      <div>
                        <HiGlobeAlt className="text-[#26A85E] w-[50px] h-[50px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="h-full w-full absolute bg-[#0000007b] left-0 top-0"></div>
        </div>
      </div>
    );
};

export default HappyClient;