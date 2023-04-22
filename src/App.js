import "./App.css";
//hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

//pages
import Home from "./pages/Home.js";
import FormClient from "./pages/FormClient";
import FormNewClient from "./pages/FormNewClient";
import Menu from "./pages/Menu";

function App() {
  const urlDataClient = `http://localhost:3000/clients`;
  const { data: clients, loading } = useFetch(urlDataClient);

  const [nameClient, setNameClient] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmUser, setConfirmUser] = useState(false);

  let userNameValidate;
  let userPasswordValidate;

  const verifyDataClient = (clients) => {
    if (clients) {
      userNameValidate = clients.filter((client) => client.name === nameClient);

      userPasswordValidate = clients.filter(
        (client) => client.password === password
      );
    }
  };

  const validateDataClient = (userName,userPassword) => {
    if (userName.length > 0) {
      if (userPassword.length > 0) {
        setSuccessMessage(`Seja bem vindo ${nameClient}`);
        setConfirmUser(true);
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
    validateDataClient(userNameValidate,userPasswordValidate);

    setNameClient("");
    setPassword("");
    setInterval(() => {
      window.location.href = "http://localhost:3001/inicio";
    }, 700);
  };

  console.log(confirmUser)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FormClient
                nameClient={nameClient}
                password={password}
                setNameClient={setNameClient}
                setPassword={setPassword}
                handleLogin={handleLogin}
                errorMessage={errorMessage}
                successMessage={successMessage}
                setErrorMessage={setErrorMessage}
                loading={loading}
                clients={clients}
              />
            }
          />
          <Route path="/cadastro" element={<FormNewClient />} />
          <Route path="/inicio" element={
               confirmUser ? <Home /> : <Navigate to="/"/>
             }
           />
          <Route path="/cardapio" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
