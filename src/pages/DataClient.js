import { useContext } from 'react'
import { ContextUserData } from '../context/ContextUser'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from './sass_pages/DataClient.module.scss'

const DataClient = () => {

  const userDataContext = useContext(ContextUserData)
  const userData = userDataContext.value.confirmUser.userValidate[0]
 
  const adressBanner = "https://beminparis.com/wp-content/uploads/2018/02/Georges_2%E2%94%AC%C2%AEGroupBeaumarly.gif"

  return (
    <>
        <Navbar/>
            <div className={styles.data_client}>
                <img src={adressBanner} alt="banner"/>
                 <div className={styles.box_data_client}>
                    <div className={styles.header_client}>
                       <img className={styles.profile_photo} src={userData.urlImage} alt="Foto do perfil"/>
                    </div>

                  </div>
            </div>
        <Footer/>
    </>
  )
}

export default DataClient