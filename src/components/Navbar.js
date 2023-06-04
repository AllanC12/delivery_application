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
import { IoClose } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";

import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import ProfileClient from "./ProfileClient";

const Navbar = () => {
  const navigate = useNavigate();

  const navbarRef = useRef();
  const menuContactRef = useRef();
  const linkContactRef = useRef();
  const iconMenuMobileRef = useRef();
  const menuMobileRef = useRef();

  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  //função que manipula o menu de contatos
  const handleMenuClient = (target, visibilityMenu) => {
    const menuContact = menuContactRef.current;
    const linkContact = linkContactRef.current;

    if (target === linkContact)
      menuContact.style.setProperty("display", "block");

    if (!visibilityMenu) {
      menuContact.style.setProperty("display", "none");
    }
  };

  //função que manipula o menuMobile
  const handleMenuMobile = () => {
    const menuMobile = menuMobileRef.current;

    if (openMenuMobile) {
      menuMobile.style.setProperty("right", "-60px");
      setOpenMenuMobile(false);
    } else {
      menuMobile.style.setProperty("right", "0");
      setOpenMenuMobile(true);
    }
  };

  //função de logout
  const finishSession = () => {
    navigate("/login");
    window.location.reload();
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
              <NavLink to="/">Início</NavLink>
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

        <div className="profile_desktop">
          <ProfileClient />
        </div>

        <div
          onClick={(e) => handleMenuMobile(e.target)}
          ref={iconMenuMobileRef}
          className="icon_menu_mobile"
        >
          {!openMenuMobile ? <BiMenu /> : <IoClose />}
        </div>
      </div>

      <div ref={menuMobileRef} className="menu_mobile">
        <ul>
          <li>
            <ProfileClient />
          </li>
          <li>
            <NavLink to="/">
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

          <li>
            <GiExitDoor onClick={finishSession} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
