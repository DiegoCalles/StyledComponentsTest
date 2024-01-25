import React, { useState, useEffect, useRef } from 'react';

export default function Referencias() {
  const refMenuBtn = useRef(null),
    refMenu = useRef(null);
  console.log(refMenu, refMenuBtn);
  const handleToggleMenu = (e) => {
    
    // Comentando la forma vanilla de crear referencias al DOM
    // const $menu = document.getElementById("menu")
    // if (e.target.textContent === "Menú") {
    //   e.target.textContent = "Cerrar";
    //   $menu.style.display= "block";
    // }
    // else {
    //    e.target.textContent = "Menú";
    //    $menu.style.display = "none";
    // }npm
    
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    }
    else {
      refMenuBtn.current.textContent === "Menú";
      refMenuBtn.current.style.display = "none";
    }

  }
    
  return (
    <>
      <h2>Referencias en React</h2>
      <button onClick={handleToggleMenu} ref={refMenuBtn}  >
        Menú
      </button>
      <nav ref={refMenu}  style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}