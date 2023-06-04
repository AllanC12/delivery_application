import {useContext} from "react"
import { ContextUserData } from "../context/ContextUser";

import "./sass_components/ProfileClient.scss";
import {FaUser} from "react-icons/fa"

import { NavLink } from "react-router-dom";

const ProfileClient = () => {

    const userDataContext = useContext(ContextUserData);
    const statusUser = userDataContext.value.confirmUser.statusLogin;
    //Definindo valor de imageUserProfile só após o conteúdo do context ser definidio
    const imageUserProfile = statusUser
      ? userDataContext.value.confirmUser.userValidate[0].urlImage
      : null;

  return (
        <div className="about_client">
                
            <div className="photo_client">

            <NavLink to="/meus_dados">
                {imageUserProfile !== "" ? (
                <img src={imageUserProfile} />
                ) : (
                <FaUser />
                )}
            </NavLink>

        </div>

  </div>
  )
}

export default ProfileClient