import React, { useEffect, useState } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  // const [name, setName]= useState("jon")
   
  useEffect(() => {
    // console.log("Fase de Montaje")
    const detectarScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", detectarScroll);
  }, [])
  
  useEffect(() => {
    // console.log("Moviendo el scroll (Actualización)");
    const detectarScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      // console.log("Fase de Desmontaje");
      window.removeEventListener("scroll", detectarScroll);
    }
  },[scrollY]);


  // useEffect(() => {
  //   console.log("Fase de Desmontaje");
  //   const detectarScroll = () => setScrollY(window.scrollY);

  //   window.addEventListener("scroll", detectarScroll);
  // });
  


  return (
    <>
      <h2> Hooks - UseEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador { scrollY} px</p>
    </>
  );
}