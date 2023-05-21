import { useContext,useState } from 'react'
import { ContextUserData } from '../context/ContextUser'
import { useNavigate } from 'react-router-dom'
import {useFetch} from "../hooks/useFetch"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './sass_pages/DataClient.scss'

import { FaUser } from "react-icons/fa";

const DataClient = () => {
  const navigate = useNavigate()

  const urlClient = `http://localhost:3000/clients`
  const userDataContext = useContext(ContextUserData)
  const userData = userDataContext.value.confirmUser.userValidate[0]
  const {handleDataClient,loading} = useFetch(urlClient)

  const [newUrl,setNewUrl] = useState("")
  const [newName,setNewName] = useState("")
  const [newEmail,setNewEmail] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const [successMessage,setSuccessMessage] = useState("")

  const getNewData = (e) => {
    if(e.target.name === "newUrl"){
      setNewUrl(e.target.value)
    }else if(e.target.name === "newName"){
      setNewName(e.target.value)
    }else if(e.target.name === "newEmail"){
      setNewEmail(e.target.value)
    }else if(e.target.name === "newPassword"){
      setNewPassword(e.target.value)
    }else{
      return
    }
  }
 
  const postNewData = async () =>{

    const updatedDataClient = {
      id: Math.random(),
      urlImage:newUrl || userData.urlImage,
      name:newName || userData.name,
      email: newEmail || userData.email,
      password: newPassword || userData.password
    }
    
    handleDataClient(updatedDataClient,"POST")
    
  }
  
  const updateDataEdit = async () =>{
    await handleDataClient(userData.id,"DELETE")
    await postNewData()
      
      setTimeout(()=>{
        navigate("/")
      },1000)
  }
  
  const handleEditData =  (e) => {
    e.preventDefault()

    if(newName === userData.name && 
      newPassword === userData.password && 
      newEmail === userData.email){
      setErrorMessage("Sem alterações nos dados")
      return
    }

    if(newName === "" &&  newPassword === "" && newEmail === "") return
    
    updateDataEdit()
    
    
    setNewName('')
    setNewEmail('')
    setNewPassword('')
 }

   return (
    <>
        <Navbar/>
            <div className="data_client">
 -
                       <form onSubmit={handleEditData} >
                        
                         {userData.urlImage ?
                          <img className="profile_photo" 
                          src={userData.urlImage} 
                          alt="Foto do perfil"/> :
                          <FaUser/>
                          }
                          
                          <label>
                            <h4>URL de perfil</h4>
                            <input type="text"  onChange={getNewData}  value={newUrl} name="newUrl" placeholder="URL de perfil..." />
                          </label>

                          <label>
                            <h4>Nome de usuário: <span>{userData.name}</span></h4>
                            <input type="text"  onChange={getNewData}  value={newName} name="newName" placeholder="Novo nome..." />
                          </label>

                          <label>
                            <h4>Email: <span>{userData.email}</span></h4>
                            <input type="email"  onChange={getNewData} value={newEmail} name="newEmail" placeholder="Novo email..." />
                          </label>
                          
                          <label>
                            <h4>Senha: <span>{userData.password}</span></h4>
                            <input type="text"  onChange={getNewData} value={newPassword} name="newPassword" placeholder="Nova senha..." />
                          </label>

                          <input type="submit" value="Alterar dados" className="btn" />

                          {errorMessage && <p className="message-error">{errorMessage}</p>}

                          {successMessage && <p className="message-success">{successMessage}</p>}

                          {loading && <p>Carregando...</p>}
                        </form>

             </div>
        <Footer/>
    </>
  )
}

export default DataClient