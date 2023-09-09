import React from "react";
import { useLocation } from "react-router-dom";
import find_ticket from "../../../public/Ticket_find_page.png"
import FindTcket from "../../Components/FindTcket/FindTcket";

const AllTicketsBySearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Get the values of individual query parameters
  const fromCity = queryParams.get("fromcity");
  const toCity = queryParams.get("tocity");
  const doj = queryParams.get("doj");
  const dor = queryParams.get("dor");
  console.log(fromCity, toCity, doj, dor);
  return (
    <div>   
      <div className="bg-[#63696C] w-full h-[250px]">
     
      </div>
      <FindTcket/>
    </div>
  );
};

export default AllTicketsBySearch;
