//styles
import styles from "./sass_pages/Home.module.scss"

//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
         <div className={styles.banner_home}>
            <div className={styles.img_banner}></div>
            <div className={styles.img_banner}></div>
            <div className={styles.img_banner}></div>
         </div>
      <Footer/>
    </div>
  )
}

export default Home
