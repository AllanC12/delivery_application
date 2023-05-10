//styles

//components
import Navbar from "../components/Navbar";
import BannerHome from "../components/BannerHome";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";


const Home = () => {

  return (
    <div>
      <Navbar />
       <BannerHome/>
       <Promotions/>
      <Footer />
    </div>
  );
};

export default Home;
