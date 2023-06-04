import { useContext, useState } from "react";
import { ContextUserData } from "../context/ContextUser";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { resetFields } from "../hooks/useResetFields";

import "./sass_pages/DataClient.scss";

import { FaUser } from "react-icons/fa";

const DataClient = () => {
  const navigate = useNavigate();

  const userDataContext = useContext(ContextUserData);
  const userData = userDataContext.value.confirmUser.userValidate[0];
  const userId = userData.id;
  const urlClient = `http://localhost:3000/clients/${userId}`;

  const { handleDataClient, loading } = useFetch(urlClient);

  const [newUrl, setNewUrl] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //função que pega os dados a serem atualizados
  const getNewData = (e) => {
    if (e.target.name === "newUrl") {
      setNewUrl(e.target.value);
    } else if (e.target.name === "newName") {
      setNewName(e.target.value);
    } else if (e.target.name === "newEmail") {
      setNewEmail(e.target.value);
    } else if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
    } else {
      return;
    }
  };

  //função que monta um objeto com os dados de usuário a serem atualizados ou mantidos com os valores antigos
  const postNewData = async () => {
    const updatedDataClient = {
      id: Math.random(),
      urlImage: newUrl === "" ? userData.urlImage : newUrl,
      name: newName === "" ? userData.name : newName,
      email: newEmail === "" ? userData.email : newEmail,
      password: newPassword === "" ? userData.password : newPassword,
    };

    handleDataClient(updatedDataClient, "PUT");
  };

  //função que redireciona usuário após dados atualizados
  const redirectUser = () => {
    setSuccessMessage("Refaça o login com os novos dados...");
    setTimeout(() => {
      navigate("/login");
      window.location.reload();
    }, 1000);
  };

  //função que atualiza os dados do usuário
  const updateDataEdit = async () => {
    await postNewData();
    redirectUser();
  };

  //função que reseta campos de usuário
  
  //função que inicia todo o processo subsequente de atualização dos dados
  const handleEditData = (e) => {
    e.preventDefault();
    
    if (
      newName === userData.name &&
      newPassword === userData.password &&
      newEmail === userData.email
    ) {
      setErrorMessage("Sem alterações nos dados");
      return;
    }
    
    if (newName === "" && newPassword === "" && newEmail === "") return;

    updateDataEdit();
    resetFields( setNewUrl,setNewName,setNewEmail, setNewPassword) 
  };

  return (
    <>
      <div className="data_client">
        <form onSubmit={handleEditData}>
          {userData.urlImage !== "" ? (
            <img
              className="profile_photo"
              src={userData.urlImage}
              alt="Foto do perfil"
            />
          ) : (
            <FaUser />
          )}

          <label>
            <h4>URL de perfil</h4>
            <input
              type="text"
              onChange={getNewData}
              value={newUrl}
              name="newUrl"
              placeholder="URL de perfil..."
            />
          </label>

          <label>
            <h4>
              Nome de usuário: <span>{userData.name}</span>
            </h4>
            <input
              type="text"
              onChange={getNewData}
              value={newName}
              name="newName"
              placeholder="Novo nome..."
            />
          </label>

          <label>
            <h4>
              Email: <span>{userData.email}</span>
            </h4>
            <input
              type="email"
              onChange={getNewData}
              value={newEmail}
              name="newEmail"
              placeholder="Novo email..."
            />
          </label>

          <label>
            <h4>
              Senha: <span>{userData.password}</span>
            </h4>
            <input
              type="text"
              onChange={getNewData}
              value={newPassword}
              name="newPassword"
              placeholder="Nova senha..."
            />
          </label>

          <input type="submit" value="Alterar dados" className="btn" />

          {errorMessage && <p className="message-error">{errorMessage}</p>}

          {successMessage && (
            <p className="message-success">{successMessage}</p>
          )}

          {loading && <p>Carregando...</p>}
        </form>
      </div>
    </>
  );
};

export default DataClient;
