import styles from "./sass_pages/Menu.module.scss";

import { useRef, useEffect } from "react";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import before_page from "../images/arrows/before-page.png";
import next_page from "../images/arrows/next-page.png";

const Menu = () => {
  const pageOne = useRef();
  const pageTwo = useRef();
  const pageThree = useRef();
  const pageFour = useRef();

  const showPage = (pageTwo,pageThree,pageOne) => {
    pageTwo.style.setProperty("transform", "RotateY(180deg)");
    setTimeout(()=>{
      pageThree.style.setProperty("z-index", "2");
      pageOne.style.setProperty("z-index", "1");
    },540)

  };

  const verifyPageTwo = (pageTwo) => {
    
  }

  const hiddePage = (pageTwo,pageOne,pageThree) => {
    if(getComputedStyle(pageTwo).transform !== "none"){
      pageTwo.style.setProperty("transform", "none");
      pageOne.style.setProperty("z-index","1")
      pageTwo.style.setProperty("z-index","1")
      pageThree.style.setProperty("z-index","auto")
    }else{
      console.log(getComputedStyle(pageTwo).transform)
      return
    }
  };

  const beforePage = () => {
    hiddePage(pageTwo.current,pageOne.current,pageThree.current);
  };

  const nextPage = () => {
    showPage(pageTwo.current,pageThree.current,pageOne.current);
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
              <p>Conteudo da pagina 1 </p>
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
          </div>
          <img onClick={nextPage} src={next_page} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
