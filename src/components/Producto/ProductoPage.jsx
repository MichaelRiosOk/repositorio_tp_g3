import React from "react";

function ProductoPage({ handleComprar }) {
  return (
    <main>
      <h1>Productos</h1>
      {/* Ejemplo de producto */}
      <div>
        <h2>Auto Modelo 2024</h2>
        <button onClick={handleComprar}>Comprar</button>
      </div>
    </main>
  );
}

export default ProductoPage;
