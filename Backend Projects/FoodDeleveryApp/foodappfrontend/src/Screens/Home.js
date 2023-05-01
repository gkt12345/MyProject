import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";


const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className="m-4"><Card /></div>
      <div> <Footer /> </div>
    </div>
  );
};

export default Home;
