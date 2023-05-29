import "./sass_components/Navbar.scss";

import { NavLink } from "react-router-dom";

import logo from "../images/img_animations/logo.png";

import { FaUser, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { ContextUserData } from "../context/ContextUser";
import { useContext, useRef } from "react";

const Navbar = () => {
  const userDataContext = useContext(ContextUserData);
  const imageUserProfile = userDataContext.value.confirmUser.userValidate[0].urlImage;

  const navbarRef = useRef()
  const profilePhotoRef = useRef();
  const menuContactRef = useRef();
  const menuClientRef = useRef();
  const linkContactRef = useRef();
  const iconMenuMobileRef = useRef();
  const menuMobileRef = useRef();
  let visibilityMenu = true;

  const handleMenuClient = (target,visibilityMenu) => {
    const profilePhoto = profilePhotoRef.current;
    const menuContact = menuContactRef.current;
    const menuClient = menuClientRef.current;
    const linkContact = linkContactRef.current;

    if (target === linkContact) menuContact.style.setProperty("display", "block");       
     if (target.parentNode === profilePhoto) menuClient.style.setProperty("display", "block"); 

    if(!visibilityMenu){
      menuContact.style.setProperty("display", "none")
      menuClient.style.setProperty("display", "none")
    }


   };

  const handleMenuMobile = (target) => {
    const iconMenu = iconMenuMobileRef.current;
    const menuMobile = menuMobileRef.current;

    if (target === iconMenu) {
      menuMobile.style.setProperty("right", "0");
      console.log("aqui");
      //  visibilityMenu = true
    }
  };

  return (
    <nav ref={navbarRef} className="navbar" >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="container_menu">
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

            <li ref={linkContactRef} onMouseEnter={(e) => handleMenuClient(e.target,true)}>
              Fale com a gente

              <div ref={menuContactRef}  onMouseLeave={(e) => handleMenuClient(e.target,false)} className="menu_contact menu">

                <div className="container_contact">
                  <FaWhatsapp />
                  <a target="_blank" href="http://wa.me/37988551832">
                    Whataspp
                  </a>
                </div>

                <div className="container_contact">
                  <FaEnvelope />
                  <a target="_blank" href="mailto:allandevfront@gmail.com">
                    Email
                  </a>
                </div>

              </div>
            </li>

          </ul>
        </div>

      </div>

      <div className="about_client">
        
        <div ref={profilePhotoRef} onMouseEnter={(e) => handleMenuClient(e.target,true)} className="photo_client">
          {imageUserProfile !== "" ? (
            <img src={imageUserProfile} />
          ) : (
            <FaUser />
          )}
        </div>

        <div ref={menuClientRef} onMouseLeave={(e)=> handleMenuClient(e.target,false)} className="menu_data_client menu">
           <ul>
              <li>
                <NavLink to="/meus_dados">Meus dados</NavLink>
              </li>
              <li>
                <NavLink to="/">Sair</NavLink>
              </li>
            </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
