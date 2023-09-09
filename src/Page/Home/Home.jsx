import Amenities from "../../Components/Amenities/Amenities";
import Banner from "../../Components/Banner/Banner";
import BlogPost from "../../Components/BlogPost/BlogPost";
import HappyClient from "../../Components/HappyClient/HappyClient";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>  
      <Banner />
      <Amenities />
      <Testimonials />
      <HappyClient />
      <BlogPost />
    </div>
  );
};

export default Home;
