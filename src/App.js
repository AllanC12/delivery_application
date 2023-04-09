 import './App.css';
//hooks
import { BrowserRouter,Routes,Route } from 'react-router-dom';

 //pages
import Home from "./pages/Home.js"
import FormClient from './pages/FormClient';
import FormNewClient from './pages/FormNewClient';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<FormClient/>}/>
              <Route path="/cadastro" element={<FormNewClient/>}/>
           </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
