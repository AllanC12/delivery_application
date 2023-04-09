import styles from "./sass_pages/FormClient.module.scss" 

import { Link } from "react-router-dom"

//hooks
import { useRef , useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

//img_animation
import beer from "../images/img_animations/beer.png"
import cheeseBurguer from "../images/img_animations/cheese-burguer.png"
import cokeCup from "../images/img_animations/coke_cup.png"
import dinner from "../images/img_animations/dinner.png"
import potatoChips from "../images/img_animations/potato_chips.png"
import sprite from "../images/img_animations/sprite.png"

const FormClient = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    const urlDataClient = `http://localhost:3000/clients`
    const {data:clients,loading} = useFetch(urlDataClient)
    const [errorMessage,setErrorMessage] = useState('')
    const [successMessage,setSuccessMessage] = useState('')
    const Navigate = useNavigate()

    const divImgsFormAnimation = useRef()
    let indexImgAnimation = 0;
    
   const animationForm = () => {
    
    const imgsAnimation = divImgsFormAnimation.current.children
    const arrayImages = Array.from(imgsAnimation)

        setInterval(()=>{

            if(indexImgAnimation === arrayImages.length){
                indexImgAnimation = 0
                for(let i = 0; i < arrayImages.length; i++){
                    arrayImages[i].style.setProperty('opacity','0')
                }
             }

            arrayImages[indexImgAnimation].style.setProperty('opacity','1')
            indexImgAnimation++
        
        },1000)
   }


   useEffect(()=>{
     animationForm()
  },[])
    

  const handleSubmit = (e) => {
    e.preventDefault()
     const userNameValidate = clients.filter(client => (
        client.name === name
    ))

    const userPasswordValidate = clients.filter(client => (
        client.password === password
    ))

    if(userNameValidate.length > 0){
        if(userPasswordValidate.length > 0){
            setSuccessMessage(`Seja bem vindo ${name}`)
        }
    }else{
        setErrorMessage(`Usuário não encontrado...`)
    }

    setName('')
    setPassword('')
    setInterval(()=>{  
        Navigate('/inicio')
    },700)
  }

  return (
    <div className={styles.banner_form_login}>
         <form onSubmit={handleSubmit} className={styles.form_login}>
             <h2>A fome bateu? Entre aqui e sirva-se</h2>
            <div ref={divImgsFormAnimation}  className={styles.form_animation}>
                <img src={beer} alt="beer" />
                <img src={cheeseBurguer} alt="cheeseBurguer" />
                <img src={cokeCup} alt="cokeCup" />
                <img src={dinner} alt="dinner" />
                <img src={potatoChips} alt="potatoChips" />
                <img src={sprite} alt="sprite" />
            </div>
             <label>
                  <input type="text" 
                  placeholder="Insira seu nome de usuário..."
                  value={name}  
                  onChange={(e)=> setName(e.target.value)}/>
             </label>

             <label>
                  <input type="password" 
                  placeholder="Insira sua senha..."
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)}/>
             </label>

            {!loading && <input className="btn btn-login disabled" type="submit" value="Entrar" />}

            {loading && 
               <input disabled className="btn btn-login" type="submit" value="Entrando" />
            }

             {errorMessage && (
                <p className="message-error">{errorMessage}</p>
             )}

             {successMessage &&(
                <p className="message-success">{successMessage}</p>
             )}

             <Link to="/cadastro">Se é novato então clica aqui!</Link>

         </form>
     </div>
  )
}

export default FormClient