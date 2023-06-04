import "./App.css";

//hooks
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";

//context
import { ContextUserDataProvider } from "./context/ContextUser";

//pages
import Home from "./pages/Home.js";
import FormClient from "./pages/FormClient";
import FormNewClient from "./pages/FormNewClient";
import Menu from "./pages/Menu";
import About from "./pages/About"
import DataClient from "./pages/DataClient";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const [confirmUser, setConfirmUser] = useState({})
    const confirmedUser = confirmUser.statusLogin
    
    return (
    <div className="App">

      <ContextUserDataProvider value={{confirmUser}}>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<FormClient setConfirmUser={setConfirmUser} />} />
              <Route path="/cadastro" element={<FormNewClient />} />

              <Route path="/*" element={
                <div>
                    <Navbar/>
                     <div className="content">
                       <Routes>
                          <Route path="/" element={confirmedUser ? <Home /> : <Navigate to="/login"/>} />
                          <Route path="/cardapio" element={confirmedUser ? <Menu /> : <Navigate to="/login"/>} />
                          <Route path="/sobre" element={confirmedUser ? <About/> : <Navigate to="/login"/>} />
                          <Route path="/meus_dados" element={confirmedUser ? <DataClient/> : <Navigate to="/login"/>} />
                        </Routes>
                     </div>
                    <Footer/>
                  </div>
                }
              />
            </Routes>
        </BrowserRouter>
      </ContextUserDataProvider>
    </div>
  );
}

export default App;
