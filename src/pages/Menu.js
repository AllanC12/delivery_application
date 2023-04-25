import styles from "./sass_pages/Menu.module.scss";

import { useRef, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuStructure from "../components/MenuStructure";

//images
import before_page from "../images/arrows/before-page.png";
import next_page from "../images/arrows/next-page.png";

const Menu = () => {
  const pageOne = useRef();
  const pageTwo = useRef();
  const pageThree = useRef();
  const pageFour = useRef();
  const pageFive = useRef();

  const urlsForMenu = [
    "http://localhost:3000/desserts",
    "http://localhost:3000/dishes",
    "http://localhost:3000/drinks_alcool",
    "http://localhost:3000/drinks",
  ];

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
      }, 160);
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
    }, 900);
  };

  const showPageFive = (pageThree, pageFour, pageFive) => {
    if (getComputedStyle(pageThree).zIndex === "2") {
      pageFour.style.setProperty("transform", "RotateY(180deg)");
      setTimeout(() => {
        pageFive.style.setProperty("z-index", "2");
      }, 900);
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
    <div className={styles.menu_element}>
      <Navbar />

      <div className={styles.banner_menu}>
        <img src="https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xguia-de-mesa.jpg.pagespeed.ic.M976sIeg6W.jpg" />
        <div className={styles.menu}>
          <img onClick={beforePage} src={before_page} />
          <div className={styles.cover_menu}>
            <div ref={pageOne} className={`${styles.page_one} ${styles.page}`}>
              <MenuStructure
                titleSession={`Pizzas`}
                titleFood={`Pizza de mussarela`}
                priceFood={`19.99`}
              />
            </div>
            <div ref={pageTwo} className={`${styles.page_two} ${styles.page}`}>
              <p>Conteudo da pagina 2 </p>
            </div>
            <div
              ref={pageThree}
              className={`${styles.page_three} ${styles.page}`}
            >
              <p>Conteudo da pagina 3 </p>
            </div>
            <div
              ref={pageFour}
              className={`${styles.page_four} ${styles.page}`}
            >
              <p>Conteudo da pagina 4</p>
            </div>
            <div
              ref={pageFive}
              className={`${styles.page_five} ${styles.page}`}
            >
              <p>Conteudo da pagina 5</p>
            </div>
            <div className={`${styles.page_six} ${styles.page}`}>
              <p>Conteudo da pagina 6</p>
            </div>
          </div>
          <img onClick={nextPage} src={next_page} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
