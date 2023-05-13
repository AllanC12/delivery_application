import './sass_components/Navbar.scss'

import { NavLink } from 'react-router-dom'

import logo from "../images/img_animations/logo.png"
import { FaUser } from "react-icons/fa";

import { useRef } from 'react'

const Navbar = () => {
  const menuClientRef = useRef()

  const handleMenuClient = (visibility) => {
    const menuClient = menuClientRef.current
    menuClient.style.setProperty("opacity",visibility)
  }
  
  return (
    <nav className="navbar">
      <div className="logo">
         <img src={logo} alt="logo" />
       </div>
      <div className="menu_desktop">
         <ul>
           <li><NavLink to="/inicio">Início</NavLink></li>
           <li><NavLink to="/cardapio">Cardápio</NavLink></li>
           <li><NavLink to="/sobre">Sobre</NavLink></li>
           <li><NavLink to="/contatos">Contatos</NavLink></li>
         </ul>
      </div>

        <div className="about_client">
          <div  onMouseEnter={()=>handleMenuClient("1")} className="profile_client">
              <FaUser/>
          </div>

          <nav onMouseLeave={()=>handleMenuClient("0")} ref={menuClientRef} className="menu_data_client">
            <ul>
               <li><NavLink to="/meus_dados">Meus dados</NavLink></li>
               <li><NavLink to="/">Sair</NavLink></li>
            </ul>
          </nav>

      </div>

    </nav>
  )
}

export default Navbar