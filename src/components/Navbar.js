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
  let visibilityMenu = false;

  const handleMenuClient = (target) => {
    const profilePhoto = profilePhotoRef.current;
    const menuContact = menuContactRef.current;
    const menuClient = menuClientRef.current;
    const linkContact = linkContactRef.current;

    if (target === profilePhoto) menuClient.style.setProperty("display", "block");
    if (target === linkContact) menuContact.style.setProperty("display", "block");


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

            <li ref={linkContactRef} onMouseEnter={(e) => handleMenuClient(e.target)}>
              Fale com a gente

              <div ref={menuContactRef}  onMouseLeave={(e) => handleMenuClient(e.target)} className="menu_contact menu">

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
        
        <div ref={profilePhotoRef} className="photo_client">
          {imageUserProfile !== "" ? (
            <img ref={profilePhotoRef} src={imageUserProfile} />
          ) : (
            <FaUser />
          )}
        </div>

        <div ref={menuClientRef} className="menu_data_client menu">
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

      {/* <div className="menu_mobile">
        <div  ref={iconMenuMobileRef} onClick={(e) => handleMenuMobile(e.target)} className="icon_menu">
          {!visibilityMenu ? <FiMenu /> : <GrClose/>}           
        </div>
         
        <nav ref={menuMobileRef}>
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
                   Fale com a gente 
               </li>
            </ul>
      </nav>


      </div> */}

      {/* <nav ref={menuClientRef} className="menu_data_client menu">

        </nav>
      </div> */}
    </nav>
  );
};

export default Navbar;
