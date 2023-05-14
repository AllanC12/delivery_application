import { useContext } from 'react'
import { ContextUserData } from '../context/ContextUser'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './sass_pages/DataClient.scss'

const DataClient = () => {

  const userDataContext = useContext(ContextUserData)
  const userData = userDataContext.value.confirmUser.userValidate[0]
  console.log(userData)
 
  const adressBanner = "https://beminparis.com/wp-content/uploads/2018/02/Georges_2%E2%94%AC%C2%AEGroupBeaumarly.gif"

  return (
    <>
        <Navbar/>
            <div className="data_client">
                <img src={adressBanner} alt="banner"/>
 -
                      <form className="form_alter_data">
                          <img className="profile_photo" src={userData.urlImage} alt="Foto do perfil"/>

                        <h4>ID de usuário: <span>{userData.id}</span></h4>
                          <label>
                            <h4>Nome de usuário: <span>{userData.name}</span></h4>
                            <input type="text"  placeholder="Novo nome..." />
                          </label>

                          <label>
                            <h4>Email: <span>{userData.email}</span></h4>
                            <input type="email"  placeholder="Novo email..." />
                          </label>
                          
                          <label>
                            <h4>Senha: <span>{userData.password}</span></h4>
                            <input type="text"  placeholder="Nova senha..." />
                          </label>

                          <input type="submit" value="Alterar dados" className="btn" />
                        </form>

             </div>
        <Footer/>
    </>
  )
}

export default DataClient