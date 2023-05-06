import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from './sass_pages/DataClient.module.scss'

const DataClient = () => {

  const adressBanner = "https://s2.glbimg.com/TYVOVw7XXf6DwUashZWbGR3eZoY=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg"

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