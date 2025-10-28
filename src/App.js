import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import "./styles/index.scss";
import { Provider } from "react-redux";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="App">
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
