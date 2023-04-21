import "./App.css";
//hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

//pages
import Home from "./pages/Home.js";
import FormClient from "./pages/FormClient";
import FormNewClient from "./pages/FormNewClient";
import Menu from "./pages/Menu";

function App() {
  const [nameClient, setNameClient] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const urlDataClient = `http://localhost:3000/clients`;
  const { data: clients, loading } = useFetch(urlDataClient);

  console.log(clients);

  const userNameValidate = clients.filter(
    (client) => client.name === nameClient
  );

  const userPasswordValidate = clients.filter(
    (client) => client.password === password
  );

  const handleLogin = (e) => {
    e.preventDefault();

    if (userNameValidate.length > 0) {
      if (userPasswordValidate.length > 0) {
        setSuccessMessage(`Seja bem vindo ${nameClient}`);
      } else {
        setErrorMessage(`Senha incorreta`);
        return;
      }
    } else {
      setErrorMessage(`Usuário não encontrado...`);
      return;
    }

    setNameClient("");
    setPassword("");
    setInterval(() => {
      window.location.href = "http://localhost:3001/inicio";
    }, 700);
  };

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
          <Route
            path="/inicio"
            element={userPasswordValidate ? <Home /> : <FormNewClient />}
          />
          <Route path="/cardapio" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
