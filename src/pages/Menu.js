import styles from "./sass_pages/Menu.module.scss";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import before_page from "../images/arrows/before-page.png"
import next_page from "../images/arrows/next-page.png"

const Menu = () => {
  return (
    <div className={styles.menu_element}>
      <Navbar />

      <div className={styles.banner_menu}>
        <img src="https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xguia-de-mesa.jpg.pagespeed.ic.M976sIeg6W.jpg" />
        <div className={styles.menu}>
          <img src={before_page}/>
          <div className={styles.cover_menu}>
            <div className={`${styles.page_one} ${styles.page}`}></div>
            <div className={`${styles.page_two} ${styles.page}`}></div>
            <div className={`${styles.page_three} ${styles.page}`}></div>
          </div>
          <img src={next_page}/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
