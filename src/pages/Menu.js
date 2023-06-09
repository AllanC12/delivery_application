//styles
import "./sass_pages/Menu.scss";

//Hooks
import { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

//components
import MenuStructure from "../components/MenuStructure";
import ModalOrder from "../components/ModalOrder";

//images
import before_page from "../images/arrows/before-page.png";
import next_page from "../images/arrows/next-page.png";

const Menu = () => {

  //Referencias para todas as páginas do cardápio
  const pageOne = useRef();
  const pageTwo = useRef();
  const pageThree = useRef();
  const pageFour = useRef();
  const pageFive = useRef();

  //Urls para carregar todos os dados de pedidos e preços do cardápio
  const urlsForMenu = [
    "http://localhost:3000/dishes",
    "http://localhost:3000/drinks",
    "http://localhost:3000/pizzas",
    "http://localhost:3000/desserts",
    "http://localhost:3000/drinks_alcool",
  ];

  //Buscando itens individualmente por catergoria
  const { data: dishes } = useFetch(urlsForMenu[0]);
  const { data: drinks } = useFetch(urlsForMenu[1]);
  const { data: pizzas } = useFetch(urlsForMenu[2]);
  const { data: desserts } = useFetch(urlsForMenu[3]);
  const { data: drinks_alcool } = useFetch(urlsForMenu[4]);

  //State que aramazena os pedidos feitos pelo cliente
  const [orders, setOrders] = useState([]);

  //Funções que realizam a animação e sincronização das páginas do cardápio
  const verifyPageTwo = (pageTwo, pageFour, pageOne, pageThree) => {
    if (
      getComputedStyle(pageTwo).transform !== "none" &&
      getComputedStyle(pageFour).transform === "none"
    ) {
      pageTwo.style.setProperty("transform", "none");
      setTimeout(() => {
        pageOne.style.setProperty("z-index", "1");
        pageTwo.style.setProperty("z-index", "1");
        pageThree.style.setProperty("z-index", "auto");
        pageFour.style.setProperty("z-index", "auto");
      }, 150);
    } else {
      return;
    }
  };

  const verifyPageFour = (pageFour, pageFive) => {
    if (getComputedStyle(pageFour).transform !== "none") {
      pageFour.style.setProperty("transform", "none");
      pageFour.style.setProperty("z-index", "2");
      pageFive.style.setProperty("z-index", "auto");
    }
  };

  const showPageThree = (pageTwo, pageThree, pageFour, pageOne) => {
    pageTwo.style.setProperty("transform", "RotateY(180deg)");
    setTimeout(() => {
      pageThree.style.setProperty("z-index", "2");
      pageFour.style.setProperty("z-index", "2");
      pageOne.style.setProperty("z-index", "1");
    }, 600);
  };

  const showPageFive = (pageThree, pageFour, pageFive) => {
    if (getComputedStyle(pageThree).zIndex === "2") {
      pageFour.style.setProperty("transform", "RotateY(180deg)");
      setTimeout(() => {
        pageFive.style.setProperty("z-index", "2");
      }, 500);
    }
  };

  const beforePage = () => {
    verifyPageTwo(
      pageTwo.current,
      pageFour.current,
      pageOne.current,
      pageThree.current
    );
    verifyPageFour(pageFour.current, pageFive.current);
  };

  const nextPage = () => {
    showPageThree(
      pageTwo.current,
      pageFour.current,
      pageThree.current,
      pageOne.current
    );
    showPageFive(pageThree.current, pageFour.current, pageFive.current);
  };

  return (
    <div className="menu_element">

       <div className="banner_menu">
         <ModalOrder setOrders={setOrders} orders={orders} />

        <div className="menuCard">
          
          <img alt="beforePage" onClick={beforePage} src={before_page} />

          <div className="cover_menu">

            <div ref={pageOne} className="page_one page">
              <h2>Pratos típicos</h2>
              {dishes &&
                dishes.map((dishe, index) => (
                  <MenuStructure
                    key={index}
                    setOrders={setOrders}
                    titleFood={dishe.name}
                    priceFood={dishe.price}
                  />
                ))}
            </div>

            <div ref={pageTwo} className="page_two page">
              <h2>Bebidas sem álcool</h2>
              {drinks &&
                drinks.map((drink, index) => (
                  <MenuStructure
                    key={index}
                    setOrders={setOrders}
                    titleFood={drink.name}
                    priceFood={drink.price}
                  />
                ))}
            </div>

            <div
              ref={pageThree}
              className="page_three page"
            >
              <h2>Pizzas</h2>
              {pizzas &&
                pizzas.map((pizza, index) => (
                  <MenuStructure
                    key={index}
                    setOrders={setOrders}
                    titleFood={pizza.name}
                    priceFood={pizza.price}
                  />
                ))}
            </div>

            <div
              ref={pageFour}
              className="page_four page"
            >
              <h2>Sobremesas</h2>
              {desserts &&
                desserts.map((dessert, index) => (
                  <MenuStructure
                    key={index}
                    setOrders={setOrders}
                    titleFood={dessert.name}
                    priceFood={dessert.price}
                  />
                ))}{" "}
            </div>

            <div
              ref={pageFive}
              className="page_five page"
            >
              <h2>Bebidas alcoólicas</h2>
              {drinks_alcool &&
                drinks_alcool.map((drinkAlcool, index) => (
                  <MenuStructure
                    key={index}
                    setOrders={setOrders}
                    titleFood={drinkAlcool.name}
                    priceFood={drinkAlcool.price}
                  />
                ))}
            </div>
          </div>

          <img alt="nextPage" onClick={nextPage} src={next_page} />
          
        </div>
      </div>

     </div>
  );
};

export default Menu;
