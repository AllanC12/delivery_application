import { useContext,useState } from 'react'
import { ContextUserData } from '../context/ContextUser'

import {useFetch} from "../hooks/useFetch"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './sass_pages/DataClient.scss'

const DataClient = () => {
  const adressBanner = "https://beminparis.com/wp-content/uploads/2018/02/Georges_2%E2%94%AC%C2%AEGroupBeaumarly.gif"

  const urlClient = `http://localhost:3000/clients`
  const userDataContext = useContext(ContextUserData)
  const userData = userDataContext.value.confirmUser.userValidate[0]
  const {handleDataClient} = useFetch(urlClient)

  const [newName,setNewName] = useState("")
  const [newEmail,setNewEmail] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const [successMessage,setSuccessMessage] = useState("")

  const getNewData = (e) => {
    if(e.target.name === "newName"){
      setNewName(e.target.value)
    }else if(e.target.name === "newEmail"){
      setNewEmail(e.target.value)
    }else if(e.target.name === "newPassword"){
      setNewPassword(e.target.value)
    }else{
      return
    }
  }
 


  
  const validateDataEdit = () => {
    if(newName === userData.name && newPassword === userData.password && newEmail === userData.email){
      setErrorMessage("Sem alterações nos dados")
      return
    }else{
      updateDataEdit()
    }
  }

  const updateDataEdit =(id) =>{
    handleDataClient(id,"DELETE")

  }
  

const handleEditData = (e) => {
  e.preventDefault()
  
  validateDataEdit()
  updateDataEdit(userData.id)
  

  setNewName('')
  setNewEmail('')
  setNewPassword('')
}

  return (
    <>
        <Navbar/>
            <div className="data_client">
                <img src={adressBanner} alt="banner"/>
 -
                      <form onSubmit={handleEditData} >
                          <img className="profile_photo" src={userData.urlImage} alt="Foto do perfil"/>

                        <h4>ID de usuário: <span>{userData.id}</span></h4>
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
                        </form>

             </div>
        <Footer/>
    </>
  )
}

export default DataClient