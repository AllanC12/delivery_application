import "./App.css";
//hooks
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";

//pages
import Home from "./pages/Home.js";
import FormClient from "./pages/FormClient";
import FormNewClient from "./pages/FormNewClient";
import Menu from "./pages/Menu";
import About from "./pages/About"
import DataClient from "./pages/DataClient";

function App() {

   const [confirmUser, setConfirmUser] = useState({})
   const confirmedUser = confirmUser.name

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormClient setConfirmUser={setConfirmUser} />} />
          <Route path="/cadastro" element={<FormNewClient />} />

          <Route path="/inicio" element={confirmedUser ? <Home /> : <Navigate to="/"/>} />
          <Route path="/cardapio" element={confirmedUser ? <Menu /> : <Navigate to="/"/>} />
          <Route path="/sobre" element={confirmedUser ? <About/> : <Navigate to="/"/>} />
          <Route path="/meus_dados" element={confirmedUser ? <DataClient/> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
