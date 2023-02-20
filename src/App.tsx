import "./App.css";
import Menu from "./views/menu/index";
import Home from "./views/home/index";
import Basket from "./views/basket/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
