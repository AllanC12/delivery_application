import styles from "./sass_pages/Menu.module.scss";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div className={styles.menu_element}>
      <Navbar />

      <div className={styles.banner_menu}>
        <img src="https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xguia-de-mesa.jpg.pagespeed.ic.M976sIeg6W.jpg" />
        <div className={styles.menu}>
          <div className={styles.cover_menu}>
            <div className={`${styles.page_one} ${styles.page}`}></div>
            <div className={`${styles.page_two} ${styles.page}`}></div>
            <div className={`${styles.page_three} ${styles.page}`}></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
