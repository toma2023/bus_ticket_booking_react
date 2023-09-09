import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
