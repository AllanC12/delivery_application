import "./App.css";
//hooks
import { BrowserRouter, Routes, Route} from "react-router-dom";


//pages
import Home from "./pages/Home.js";
import FormClient from "./pages/FormClient";
import FormNewClient from "./pages/FormNewClient";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormClient />} />
          <Route path="/cadastro" element={<FormNewClient />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/sobre" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
