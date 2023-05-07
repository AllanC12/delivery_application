import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from './sass_pages/DataClient.module.scss'

const DataClient = () => {

  const adressBanner = "https://beminparis.com/wp-content/uploads/2018/02/Georges_2%E2%94%AC%C2%AEGroupBeaumarly.gif"

  return (
    <>
        <Navbar/>
            <div className={styles.data_client}>
                <img src={adressBanner} alt="banner"/>
                <div className={styles.box_data_client}>
                 
                 </div>
            </div>
        <Footer/>
    </>
  )
}

export default DataClient