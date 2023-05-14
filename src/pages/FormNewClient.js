import "./sass_pages/FormClient.scss"

import chef from "../images/img_animations/chef.png"
import hungry from "../images/img_animations/hungry.png"

import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
 
const FormNewClient = () => {
  const urlAddClient = `http://localhost:3000/clients`
  const {handleDataClient} = useFetch(urlAddClient)
 
  const [emailAddUser,setEmailAddUser] = useState('')
  const [nameAddUser,setNameAddUser] = useState('')
  const [urlPhotoUser,setUrlPhotoUser] = useState('')
  const [passwordAddUser,setPasswordAddUser] = useState('')
  const [confirmPasswordAddUser,setConfirmPasswordAddUser] = useState('')
  const [errorMessage,setErrorMessage] = useState(null)
  const [successMessage,setSuccessMessage] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
     e.preventDefault()
     if(nameAddUser){
        if(passwordAddUser){
           if(passwordAddUser === confirmPasswordAddUser){
              setSuccessMessage(`Cliente cadastrado!!! Hora de comer.`)
           }else{
            setErrorMessage(`As senhas precisam ser iguais`)
            return
           }
        }else{
          setErrorMessage(`Defina uma senha`)
          return
        }
     }else{
      setErrorMessage(`Defina um nome de usuário`)
      return
     }
   
     const clientData = {
       id: Math.random(),
       name:nameAddUser,
       urlImage: urlPhotoUser,
       email:emailAddUser,
       password:passwordAddUser
     }

      
       handleDataClient(clientData,"POST")
   
     
     setNameAddUser('')
     setPasswordAddUser('')
     setConfirmPasswordAddUser('')

    setTimeout(()=> {
      navigate("/")
    },500)
  }

  return (
    <div className="banner_form_add">
        <form onSubmit={handleSubmit}>
           <h2>Pra abusar de nossas delícias é preciso se cadastrar</h2>
           <img src={chef} alt="Chefe" />

           <label>
               <input type="email" 
               placeholder="Seu melhor E-mail"
               onChange={(e)=> setEmailAddUser(e.target.value)}
               value={emailAddUser}
               />
           </label>

           <label>
               <input type="text" 
               placeholder="Crie um belo usuário..."
               onChange={(e)=> setNameAddUser(e.target.value)}
               value={nameAddUser}
               />
           </label>

           <label>
               <input type="text" 
               placeholder="A URL de uma bela foto"
               onChange={(e)=> setUrlPhotoUser(e.target.value)}
               value={urlPhotoUser}
               />
           </label>

          <label>
              <input type="password" 
              placeholder="Agora uma senha forte..." 
              onChange={(e)=> setPasswordAddUser(e.target.value)}
              value={passwordAddUser}
              />
          </label>
          
          <label>
             <input type="password" 
             placeholder="Confirme sua senha..." 
             onChange={(e)=> setConfirmPasswordAddUser(e.target.value)}
             value={confirmPasswordAddUser}
             />
          </label>
          
          <input className="btn btn-add" type="submit" value="Cadastrar" />

          {errorMessage && (
            <p className="message-error">{errorMessage}</p>
          )}

          {successMessage && (
              <p className="message-success">{successMessage} <span><img src={hungry}/></span></p>
          )}

        </form>
    </div>
  )
}

export default FormNewClient