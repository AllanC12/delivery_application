//styles
import styles from "./sass_pages/Home.module.scss"

//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {useFetch} from "../hooks/useFetch"

const Home = () => {
  const url = "http://localhost:3000/foods_banner"
  const {data:foods_banner,loading} = useFetch(url)
   return (
    <div>
      <Navbar/>
         {foods_banner && foods_banner.map(food_banner => (
            <div key={food_banner.id} className={styles.banner_home}>
              <img src={food_banner.adress_image} alt={food_banner.legend}/>
            </div>
         ))}
      <Footer/>
    </div>
  )
}

export default Home
