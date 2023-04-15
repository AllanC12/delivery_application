//styles
import styles from "./sass_pages/Home.module.scss"

//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {useFetch} from "../hooks/useFetch"
import { useEffect, useRef } from "react"

const Home = () => {
  const url = "http://localhost:3000/foods_banner"
  const {data:foods_banner} = useFetch(url)

  const containerBanner = useRef()


     useEffect(() => {
         const imgsBannerElements = containerBanner.current.children
        const imgElements = Array.from(imgsBannerElements)
        let indexSlide = 0;
        let indexMax = imgElements.length - 1
  
        if(indexSlide === indexMax)
          indexSlide = 0
    
        imgElements[indexSlide].styles.setProperty("opacity","0")
         indexSlide++
        imgElements[indexSlide].styles.setProperty("opacity","1")
     })   
 

   return (
    <div>
      <Navbar/>
      <div ref={containerBanner} className={styles.banner_home}>
         {foods_banner && foods_banner.map(food_banner => (
           <div key={food_banner.adress_image} className={styles.banner_wraper} id="selected">
              <h2>{food_banner.legend}</h2>
              <img src={food_banner.adress_image} alt={food_banner.legend}/>
           </div>
            
         ))}
      </div>

      <Footer/>
    </div>
  )
}

export default Home
