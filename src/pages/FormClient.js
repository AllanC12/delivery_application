import "./sass_pages/FormClient.scss";

import { Link, useNavigate } from "react-router-dom";

//hooks
import { useRef, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { resetFields } from "../hooks/useResetFields";

//img_animation
import beer from "../images/img_animations/beer.png";
import cheeseBurguer from "../images/img_animations/cheese-burguer.png";
import cokeCup from "../images/img_animations/coke_cup.png";
import dinner from "../images/img_animations/dinner.png";
import potatoChips from "../images/img_animations/potato_chips.png";
import sprite from "../images/img_animations/sprite.png";

//icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const FormClient = ({ setConfirmUser }) => {
  const Navigate = useNavigate();

  const divImgsFormAnimation = useRef();
  let indexImgAnimation = 0;
  let animationInterval;

  const urlDataClient = `http://localhost:3000/clients`;
  const { data: clients, loading } = useFetch(urlDataClient);
  
  const [nameClient,setNameClient] = useState("")
  const [emailClient, setEmailClient] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  let userValidate;
  let userEmailValidate;
  let userPasswordValidate;

  const inputPassword = useRef();
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  //função que controla a visualização da senha
  const showOrHidePassword = () => {
    if (!visibilityPassword) {
      inputPassword.current.setAttribute("type", "text");
      setVisibilityPassword(true);
    } else {
      inputPassword.current.setAttribute("type", "password");
      setVisibilityPassword(false);
    }
  };

  //função que renderiza a animação em cima do formulário
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

  //resetando intervalos ao desmontar o componente
  useEffect(() => {
    animationForm();
    return () => clearInterval(animationInterval);
  });

  //função que verifica se há um cliente cadastrado com essete
  const verifyDataClient = (clients) => {
    if (clients) {
      userValidate = clients.filter(
        (client) => client.email === emailClient && client.password === password
      );

      userEmailValidate = clients.filter(
        (client) => client.email === emailClient
      );

      userPasswordValidate = clients.filter(
        (client) => client.password === password
      );
    }
  };

  //iniciando sessão do usuário
  const initSessionUser = () => {
    setConfirmUser({ userValidate, statusLogin: true })
    setTimeout(() => {
      Navigate("/");
    }, 500);
  }

  const validateDataClient = (userEmail, userPassword) => {
    if (userEmail.length > 0) {
      if (userPassword.length > 0) {
        setSuccessMessage(`Seja bem vindo`);
        initSessionUser()
      } else {
        setErrorMessage(`Senha incorreta`);
        return;
      }
    } else {
      setErrorMessage(`E-mail não cadastrado...`);
      return;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    verifyDataClient(clients);
    validateDataClient(userEmailValidate, userPasswordValidate);
    resetFields(setEmailClient,setPassword)
  };

  return (
    <div className="banner_form_login">
      <form onSubmit={handleLogin} className="form_login">
        <h2>A fome bateu? Entre aqui e sirva-se</h2>

        <div ref={divImgsFormAnimation} className="form_animation">
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
            type="email"
            placeholder="Insira seu e-mail"
            value={emailClient}
            onChange={(e) => setEmailClient(e.target.value)}
          />
        </label>

        <label>
          <input
            onFocus={() => setErrorMessage("")}
            type="password"
            placeholder="Insira sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={inputPassword}
          />

          <div onClick={showOrHidePassword} className="visibility-password">
            {visibilityPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
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

        <Link className="linkNewClient" to="/cadastro">Se é novato então clica aqui!</Link>
      </form>
    </div>
  );
};

export default FormClient;
