import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import HomePage from './components/Home/HomePage';
import ProductoPage from './components/Producto/ProductoPage';
import PieDePagina from "./components/Pie/PieDePagina";

function App() {
  const [carritoCantidad, setCarritoCantidad] = useState(0);

  const handleComprar = () => {
    setCarritoCantidad(carritoCantidad + 1);
  };

  return (
    <Router>
      <Cabecera carritoCantidad={carritoCantidad} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/productos" element={<ProductoPage handleComprar={handleComprar} />} />
      </Routes>
      <PieDePagina />
    </Router>
  );
}

export default App;
