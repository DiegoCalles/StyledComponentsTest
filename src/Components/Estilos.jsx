import React, { useState, useEffect } from 'react';
import "./estilos.css";
import moduleStyles from "./Estilos.module.css"
import "./estilos.scss";


export default function Estilos() {
    let myStyles = {
      borderRadius: ".25rem",
      margin: "1.5rem",
      backgroundColor: "#1b94b6",
    };

    return (
      <section className="estilos">
        <h2>Estilos Css con React</h2>
        <h3 className="bg-react">Estilos en Hoja CSS Externa</h3>
        <h3
          //   className="bg-react"
          style={myStyles}
        >
          Estilos Linea (style)
        </h3>
        <h3 className="bg-react">
          Agregar Normalize
          <br />
          <code>@import-normalize</code>
        </h3>
        <br />
        <h3 className={moduleStyles.error}>Estilos en Hoja CSS Externa</h3>
        <h3 className={moduleStyles.success}>Estilos en Hoja CSS Externa</h3>
        <h3 className="bg-sass">Estilos  con Sass</h3>
      </section>
    );
}