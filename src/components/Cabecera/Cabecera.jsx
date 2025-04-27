import React from "react";
import { Link } from "react-router-dom";
import "./cabecera.css";

function Cabecera({ carritoCantidad }) {
  return (
    <header className="cabecera">
      <div className="cabecera__logo">
        <img src="img/ortLogo.png" alt="Logo de la empresa" />
      </div>
      <nav className="cabecera__nav">
        <Link to="/home">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="cabecera__usuario">
        <img src="img/imagenUsuario.png" alt="Usuario logueado" />
        <div className="cabecera__carrito">
          🛒 {carritoCantidad}
        </div>
      </div>
    </header>
  );
}

export default Cabecera;
