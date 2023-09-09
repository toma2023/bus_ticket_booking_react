import React from "react";
import Container from "../Container/Container";
import AmenitiesCard from "../AmenitiesCard/AmenitiesCard";



const Amenities = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="py-4 text-4xl font-semibold">Our Amenities</h2>
          <p className="text-lg text-[#777777]">
            Have a look at our popular reason. why you should choose you bus.
            Just choose a Bus and
          </p>
          <p className=" text-lg text-[#777777]">
            get a ticket for your great journey. !
          </p>
        </div>
        {/* amenities */}
        <AmenitiesCard/>
      </Container>
    </div>
  );
};

export default Amenities;
