import styles from './sass_components/Navbar.module.scss'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        
      </div>
      <div className={styles.menu_desktop}>
         <ul>
           <li><NavLink to="/inicio">Início</NavLink></li>
           <li><NavLink to="/cardapio">Cardápio</NavLink></li>
           <li><NavLink to="/sobre">Sobre</NavLink></li>
           <li><NavLink to="/contatos">Contatos</NavLink></li>
         </ul>
      </div>
    </nav>
  )
}

export default Navbar