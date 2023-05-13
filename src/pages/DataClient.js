import { useContext } from 'react'
import { ContextUserData } from '../context/ContextUser'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './sass_pages/DataClient.scss'

const DataClient = () => {

  const userDataContext = useContext(ContextUserData)
  const userData = userDataContext.value.confirmUser.userValidate[0]
 
  const adressBanner = "https://beminparis.com/wp-content/uploads/2018/02/Georges_2%E2%94%AC%C2%AEGroupBeaumarly.gif"

  return (
    <>
        <Navbar/>
            <div className="data_client">
                <img src={adressBanner} alt="banner"/>
                 <div className="box_data_client">
                    <div className="header_client">
                       <img className="profile_photo" src={userData.urlImage} alt="Foto do perfil"/>
                    </div>

                  </div>
            </div>
        <Footer/>
    </>
  )
}

export default DataClient