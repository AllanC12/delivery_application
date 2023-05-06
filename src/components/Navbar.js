import styles from './sass_components/Navbar.module.scss'

import { NavLink } from 'react-router-dom'

import logo from "../images/img_animations/logo.png"

import { useRef } from 'react'

const Navbar = () => {
  const profileRef = useRef()
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
         <img src={logo} alt="logo" />
       </div>
      <div className={styles.menu_desktop}>
         <ul>
           <li><NavLink to="/inicio">Início</NavLink></li>
           <li><NavLink to="/cardapio">Cardápio</NavLink></li>
           <li><NavLink to="/sobre">Sobre</NavLink></li>
           <li><NavLink to="/contatos">Contatos</NavLink></li>
         </ul>
      </div>

      <div className={styles.about_client}>
         <div ref={profileRef} className={styles.profile_client}>
            
         </div>
          <nav className={styles.menu_data_client}>
            <ul>
               <li><NavLink to="/meu_perfil">Meu perfil</NavLink></li>
               <li><NavLink to="meus_dados">Meus dados</NavLink></li>
               <li><NavLink to="/">Sair</NavLink></li>
            </ul>
          </nav>
      </div>

    </nav>
  )
}

export default Navbar