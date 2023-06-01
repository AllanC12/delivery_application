import "./sass_components/Navbar.scss";

import { NavLink } from "react-router-dom";

import logo from "../images/img_animations/logo.png";

import {
  FaWhatsapp,
  FaEnvelope,
  FaHome,
  FaBookOpen,
  FaBuilding,
} from "react-icons/fa";

import { BiMenu } from "react-icons/bi";

import { GrContact } from "react-icons/gr";

import { useRef } from "react";

import ProfileClient from "./ProfileClient";

const Navbar = () => {
  const navbarRef = useRef();
  const profilePhotoRef = useRef();
  const menuContactRef = useRef();
  const menuClientRef = useRef();
  const linkContactRef = useRef();
  const iconMenuMobileRef = useRef();
  const menuMobileRef = useRef();
  let visibilityMenu = true;

  const handleMenuClient = (target, visibilityMenu) => {
    const profilePhoto = profilePhotoRef.current;
    const menuContact = menuContactRef.current;
    const menuClient = menuClientRef.current;
    const linkContact = linkContactRef.current;

    if (target === linkContact)
      menuContact.style.setProperty("display", "block");

    if (!visibilityMenu) {
      menuContact.style.setProperty("display", "none");
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
    <nav ref={navbarRef} className="navbar">
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

            <li
              ref={linkContactRef}
              onMouseEnter={(e) => handleMenuClient(e.target, true)}
            >
              Fale com a gente
              <div
                ref={menuContactRef}
                onMouseLeave={(e) => handleMenuClient(e.target, false)}
                className="menu_contact menu"
              >
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

      <ProfileClient />

      <BiMenu className="icon_menu_mobile" />

      <div className="menu_mobile">
        <ul>
          <li>
            <ProfileClient />
          </li>
          <li>
            <NavLink to="/inicio">
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cardapio">
              <FaBookOpen />
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre">
              <FaBuilding />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
