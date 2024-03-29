import React from "react";
import propTypes from "prop-types";

export default function Propiedades(props) {
    return (
      <div>
        <h2> {props.porDefecto}</h2>
        {/* 
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano? "Verdadero" : "Falso"} </li>
            <li>{props.arrayNew.join(", ")} </li>
            <li>{props.objeto.nombre + ` ` + props.objeto.apellido}</li>
            <li>{props.arrayNew.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul> */}
      </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "las Propiedades",
};

Propiedades.propTypes = {
  numero: propTypes.number.isRequired,
  cadena:propTypes.string.isRequired
}