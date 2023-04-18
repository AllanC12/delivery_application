//styles
import styles from "./sass_pages/Home.module.scss";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useRef } from "react";

const Home = () => {
  const imgElement = useRef();

  useEffect(() => {
    const imgBanner = imgElement.current.children;
    let index = 0;
    let indexMax = imgBanner.length - 1;

    setInterval(() => {
      imgBanner[index].classList.remove("selected");
      index++;
      if (index > indexMax) index = 0;
      imgBanner[index].classList.add("selected");
    }, 4000);
  }, []);

  return (
    <div>
      <Navbar />
      <div ref={imgElement} className="banner_home">
        <div className="banner_wraper selected">
          <h2 className="legend_banner">"Pizzas maravilhosas..."</h2>
          <img
            className="img_banner"
            src="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express-1536x1007.jpg"
          />
        </div>
        <div className="banner_wraper">
          <h2 className="legend_banner">...Sobremesas impactantes...</h2>
          <img
            className="img_banner"
            src="https://www.sabornamesa.com.br/media/k2/items/cache/7d2898c3630feea92ec1553d16389ff6_XL.jpg"
          />
        </div>
        <div className="banner_wraper">
          <h2 className="legend_banner">Drinks de tirar o fôlego...</h2>
          <img
            className="img_banner"
            src="https://blog.ginbrasil.com.br/wp-content/uploads/2020/08/Gin-Brasil-11-Entenda-a-fun%C3%A7%C3%A3o-do-gelo-no-seu-drink-e-por-que-ele-%C3%A9-importante.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
