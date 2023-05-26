import "./sass_components/Navbar.scss";

import { NavLink } from "react-router-dom";

import logo from "../images/img_animations/logo.png";

import { FaUser, FaWhatsapp, FaEnvelope, FaHamburger } from "react-icons/fa";
import {FiMenu} from "react-icons/fi"

import { ContextUserData } from "../context/ContextUser";
import { useContext, useRef } from "react";

const Navbar = () => {
  const userDataContext = useContext(ContextUserData);
  const imageUserProfile =
    userDataContext.value.confirmUser.userValidate[0].urlImage;

  const profilePhotoRef = useRef();
  const menuContactRef = useRef();
  const menuClientRef = useRef();
  const linkContactRef = useRef();

  const handleMenuClient = (target) => {
    const profilePhoto = profilePhotoRef.current;
    const menuContact = menuContactRef.current;
    const menuClient = menuClientRef.current;
    const linkContact = linkContactRef.current;

    if (target === profilePhoto) {
      menuClient.style.setProperty("opacity", "1");
    } else if (target === linkContact) {
      menuContact.style.setProperty("opacity", "1");
    } else {
      menuContact.style.setProperty("opacity", "0");
      menuClient.style.setProperty("opacity", "0");
    }
  };

  return (
    <nav className="navbar" onMouseLeave={(e) => handleMenuClient(e.target)}>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu_desktop">
        <ul>
          <li>
            <NavLink to="/inicio">Início</NavLink>
          </li>
          <li>
            <NavLink to="/cardapio">Cardápio</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Nossa história</NavLink>
          </li>

          <li>
            <span
              onMouseEnter={(e) => handleMenuClient(e.target)}
              ref={linkContactRef}
            >
              Fale com a gente
            </span>
          </li>
        </ul>
      </div>


      <div className="menu_mobile">
        <FiMenu/>
         
        <ul>
          <li>
            <NavLink to="/inicio">Início</NavLink>
          </li>
          <li>
            <NavLink to="/cardapio">Cardápio</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Nossa história</NavLink>
          </li>

          <li>
            <span
              onMouseEnter={(e) => handleMenuClient(e.target)}
              ref={linkContactRef}
            >
              Fale com a gente
            </span>
          </li>
        </ul>

      </div>

      <div className="about_client">
        <div
          onMouseEnter={(e) => handleMenuClient(e.target)}
          className="profile_client"
        >
          {imageUserProfile !== "" ? (
            <img  ref={profilePhotoRef}
            src={imageUserProfile} />
          ) : (
            <FaUser />
          )}
        </div>

        <nav ref={menuContactRef} className="menu_contact menu">
          <ul>
            <li>
              <FaWhatsapp />
              <a target="_blank" href="http://wa.me/37988551832">
                Whataspp
              </a>
            </li>

            <li>
              <FaEnvelope />
              <a target="_blank" href="mailto:allandevfront@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </nav>

        <nav ref={menuClientRef} className="menu_data_client menu">
          <ul>
            <li>
              <NavLink to="/meus_dados">Meus dados</NavLink>
            </li>
            <li>
              <NavLink to="/">Sair</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
