import "./App.css";
import Home from "./pages/Home";
import Header from "./componentes/Header";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
