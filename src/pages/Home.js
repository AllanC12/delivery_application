//styles
import styles from "./sass_pages/Home.module.scss";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useRef } from "react";

const Home = () => {
  const imgElement = useRef();
  const legendBannerElement = useRef()

  const imagesConfig = [
    {id: 1,
     legend:"Pizzas maravilhosas...",
    address: "https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express-1536x1007.jpg"},
    {id: 2,
    legend:"...Sobremesas impactantes...",
    address:"https://www.sabornamesa.com.br/media/k2/items/cache/7d2898c3630feea92ec1553d16389ff6_XL.jpg"},
    {id: 3,
      legend:"Drinks de tirar o fôlego...",
     address:"https://blog.ginbrasil.com.br/wp-content/uploads/2020/08/Gin-Brasil-11-Entenda-a-fun%C3%A7%C3%A3o-do-gelo-no-seu-drink-e-por-que-ele-%C3%A9-importante.jpg"
    }
  ];
  

  useEffect(()=>{
    const imgBanner = imgElement.current
    const imgLegend = legendBannerElement.current
    let index = 0
    let indexMax = imagesConfig.length - 1
    setInterval(()=>{
      if(index > indexMax)
        index = 0
      imgBanner.setAttribute("src",imagesConfig[index].address)
      imgLegend.innerText = imagesConfig[index].legend
      index++
    },5000)
  },[])


  return (
    <div>
      <Navbar />
      <div  className="banner_home">
        <div className="banner_wraper">
          <h2 ref={legendBannerElement}>{imagesConfig[0].legend}</h2>
          <img ref={imgElement} src={imagesConfig[0].address} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
