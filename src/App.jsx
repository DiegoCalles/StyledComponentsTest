
import React from "react"; 
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Componente from "./Components/Component";
import Propiedades from "./Components/Props";
import Estado from "./Components/Estados";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./Components/Eventos";
import ComunicacionComponente from "./Components/ComunicacionComponente"
import CicloDeVida from "./Components/CicloDeVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";
import ScrollHooks from "./Components/ScrollHooks";
import RelojHooks from "./Components/RelojHooks";
import AjaxHooks from "./Components/AjaxHooks";
import "./App.css";
import CustomHooks from "./Components/CustomHooks";
import Referencias from "./Components/Referencias";
import Formularios from "./Components/formularios";
import Estilos from "./Components/Estilos";







function App() {
  // let nombre = "Diego";
  // let auth = true;
  // let estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
  const [count, setCount] = useState(0);

  return (
    // el fragment (<> </>) para agrupar dos o más divs dentro de un mismo componente
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* body */}
      <h1>Vite + React</h1>
      {/* OJO:  Comenté todo para trabajar con los componentes desde cero */}
      {/* <h2>Hola Mundo con Vite </h2> */}
      {/* <p>{ auth?"El usuario está logeado":"El usuario no está logeado"}</p>
      <ul>{estaciones.map((el, index) => (<li key = {index}>{el}</li>) )} </ul> 
      <label htmlFor="nombre">Nombre</label>
      <br />
      <input type="text" id="nombre" />
      <h2>{nombre}</h2> */}
      <section>
        <Componente msg="Hola soy un componente funcional" />
        <br />
        <br />
        <hr />
        <Propiedades
          cadena="hola"
          numero={12}
          booleano={true}
          arrayNew={[1, 2, 3]}
          objeto={{ nombre: "Diego", apellido: "Calles" }}
          funcion={(num) => num * num}
          elementoReact={<li>Esto es un elemento React (JSX) </li>}
          componenteReact={
            <Componente msg="Hola soy un componente pasado como Prop" />
          }
        />
        <br />
        <br />
        <hr />
        <Estado />
        <br />
        <br />
        <hr />
        <RenderizadoCondicional />
        <br />
        <br />
        <hr />
        <RenderizadoElementos />
        <br />
        <br />
        <hr />
        <EventosES6 />
        <br />
        <br />
        <hr />
        <EventosES7 />
        <br />
        <br />
        <hr />
        <MasSobreEventos />
        <br />
        <br />
        <hr />
        <ComunicacionComponente />
        <br />
        <br />
        <hr />
        <CicloDeVida />
        <br />
        <br />
        <hr />
        <AjaxApis />
        <br />
        <br />
        <hr />
        <ContadorHooks titulo="Seguidores" />
        <br />
        <br />
        <hr />
        <ScrollHooks />
        <br />
        <br />
        <hr />
        <RelojHooks />
        <br />
        <br />
        <hr />
        <AjaxHooks />
        <br />
        <br />
        <hr />
        <CustomHooks />
        <br />
        <br />
        <hr />
        <Referencias />
        <br />
        <br />
        <hr />
        <Formularios />
        <br />
        <br />
        <hr />
        <Estilos />
      </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br />
      <br />
    </>
  );
}

export default App;
