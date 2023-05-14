import "./sass_components/Banner.scss";

import { useEffect, useRef } from "react";

const BannerHome = () => {
    const imgElement = useRef();

    useEffect(() => {
      const imgBanner = imgElement.current.children;
      let index = 0;
      let indexMax = imgBanner.length - 1;
      imgBanner[0].classList.add("selected");
  
      setInterval(() => {
        imgBanner[index].classList.remove("selected");
        index++;
        if (index > indexMax) index = 0;
        imgBanner[index].classList.add("selected");
      }, 4000);
    }, []);
  
  return (
    <div ref={imgElement} className="banner_home">
      <div className="banner_wraper selected">
        <h2 className="legend_banner">Pizzas maravilhosas...</h2>
        <img src="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express-1536x1007.jpg" />
      </div>
      <div className="banner_wraper ">
        <h2 className="legend_banner">...Sobremesas impactantes...</h2>
        <img src="https://www.assai.com.br/sites/default/files/styles/blog_destaque/public/blog/receita-para-a-sobremesa-do-ano-novo_1.jpg?itok=oVo6gPkU" />
      </div>
      <div className="banner_wraper ">
        <h2 className="legend_banner">Drinks de tirar o fôlego...</h2>
        <img src="https://blog.ginbrasil.com.br/wp-content/uploads/2020/08/Gin-Brasil-11-Entenda-a-fun%C3%A7%C3%A3o-do-gelo-no-seu-drink-e-por-que-ele-%C3%A9-importante.jpg" />
      </div>
    </div>
  );
};

export default BannerHome;
