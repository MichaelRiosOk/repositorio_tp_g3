import "./producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


function Producto({ props }) {
  return (
    <div className="producto-card">
      <div className="producto-card-image-container">
        <img
          src={props.label}
          alt={`Etiqueta de ${props.name}`}
          className="producto-card-image"
        />
      </div>
      <div className="producto-card-content">
        <h3 className="producto-card-title">{props.name}</h3>
        <p className="producto-card-type">{props.type}</p>
        <p className="producto-card-abv">ABV: {props.abv}%</p>
      </div>
    </div>
  );
}

export default Producto;