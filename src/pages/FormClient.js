import styles from "./sass_pages/FormClient.module.scss";

import { Link, useNavigate } from "react-router-dom";

//hooks
import { useRef, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

//img_animation
import beer from "../images/img_animations/beer.png";
import cheeseBurguer from "../images/img_animations/cheese-burguer.png";
import cokeCup from "../images/img_animations/coke_cup.png";
import dinner from "../images/img_animations/dinner.png";
import potatoChips from "../images/img_animations/potato_chips.png";
import sprite from "../images/img_animations/sprite.png";

const FormClient = ({ setConfirmUser }) => {
  const Navigate = useNavigate();

  const divImgsFormAnimation = useRef();
  let indexImgAnimation = 0;
  let animationInterval;

  const urlDataClient = `http://localhost:3000/clients`;
  const { data: clients, loading } = useFetch(urlDataClient);

  const [nameClient, setNameClient] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  let userNameValidate;
  let userPasswordValidate;

  const animationForm = () => {
    const imgsAnimation = divImgsFormAnimation.current.children;
    const arrayImages = Array.from(imgsAnimation);

      animationInterval = setInterval(() => {
      if (indexImgAnimation === arrayImages.length) {
        indexImgAnimation = 0;
        for (let i = 0; i < arrayImages.length; i++) {
          arrayImages[i].style.setProperty("opacity", "0");
        }
      }
      arrayImages[indexImgAnimation].style.setProperty("opacity", "1");
      indexImgAnimation++;
    }, 1000);
  };

  useEffect(() => {
    animationForm();
    return () => clearInterval(animationInterval)
  });

  const verifyDataClient = (clients) => {
    if (clients) {
      userNameValidate = clients.filter((client) => client.name === nameClient);

      userPasswordValidate = clients.filter(
        (client) => client.password === password
      );
    }
  };

  const validateDataClient = (userName, userPassword) => {
    if (userName.length > 0) {
      if (userPassword.length > 0) {
        setSuccessMessage(`Seja bem vindo ${nameClient}`);
        setConfirmUser({status:true,name:nameClient});
        setTimeout(() => {
          Navigate("/inicio");
        }, 500);
      } else {
        setErrorMessage(`Senha incorreta`);
        return;
      }
    } else {
      setErrorMessage(`Usuário não encontrado...`);
      return;
    }
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    verifyDataClient(clients);
    validateDataClient(userNameValidate, userPasswordValidate);

    setNameClient("");
    setPassword("");
  };

  return (
    <div className={styles.banner_form_login}>
      <form onSubmit={handleLogin} className={styles.form_login}>
        <h2>A fome bateu? Entre aqui e sirva-se</h2>
        <div ref={divImgsFormAnimation} className={styles.form_animation}>
          <img src={beer} alt="beer" />
          <img src={cheeseBurguer} alt="cheeseBurguer" />
          <img src={cokeCup} alt="cokeCup" />
          <img src={dinner} alt="dinner" />
          <img src={potatoChips} alt="potatoChips" />
          <img src={sprite} alt="sprite" />
        </div>
        <label>
          <input
            onFocus={() => setErrorMessage("")}
            type="text"
            placeholder="Insira seu nome de usuário..."
            value={nameClient}
            onChange={(e) => setNameClient(e.target.value)}
          />
        </label>

        <label>
          <input
            onFocus={() => setErrorMessage("")}
            type="password"
            placeholder="Insira sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && (
          <input
            className="btn btn-login disabled"
            type="submit"
            value="Entrar"
          />
        )}

        {loading && (
          <input
            disabled
            className="btn btn-login"
            type="submit"
            value="Entrando"
          />
        )}

        {errorMessage && <p className="message-error">{errorMessage}</p>}

        {successMessage && <p className="message-success">{successMessage}</p>}

        <Link to="/cadastro">Se é novato então clica aqui!</Link>
      </form>
    </div>
  );
};

export default FormClient;
