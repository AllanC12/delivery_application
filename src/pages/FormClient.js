import styles from "./sass_pages/FormClient.module.scss" 

import { Link } from "react-router-dom"

import { useRef , useEffect} from "react"

//img_animation
import beer from "../images/img_animations/beer.png"
import cheeseBurguer from "../images/img_animations/cheese-burguer.png"
import cokeCup from "../images/img_animations/coke_cup.png"
import dinner from "../images/img_animations/dinner.png"
import potatoChips from "../images/img_animations/potato_chips.png"
import sprite from "../images/img_animations/sprite.png"

const FormClient = () => {
    const divImgsFormAnimation = useRef()
    let indexImgAnimation = 0;

   const animationForm = () => {
    
    const imgsAnimation = divImgsFormAnimation.current.children
    const arrayImages = Array.from(imgsAnimation)

        setInterval(()=>{

            if(indexImgAnimation === arrayImages.length){
                indexImgAnimation = 0
             }

            arrayImages[indexImgAnimation].style.setProperty('opacity','1')
            indexImgAnimation++
        },1000)
   }


   useEffect(()=>{
     animationForm()
  })
    

  return (
    <div className={styles.banner_main}>
         <form className={styles.form_login}>
             <h2>A fome bateu? Entre aqui e sirva-se</h2>
            <div ref={divImgsFormAnimation}  className={styles.form_animation}>
                <img src={beer} alt="" />
                <img src={cheeseBurguer} alt="" />
                <img src={cokeCup} alt="" />
                <img src={dinner} alt="" />
                <img src={potatoChips} alt="" />
                <img src={sprite} alt="" />
            </div>
             <label>
                  <input type="text" placeholder="Insira seu nome..."/>
             </label>

             <label>
                  <input type="password" placeholder="Insira sua senha..."/>
             </label>

             <input className="btn" type="submit" value="Enviar" />

             <Link to="/cadastro">Se é novato então clica aqui!</Link>

         </form>
     </div>
  )
}

export default FormClient