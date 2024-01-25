import React, { useState} from 'react';

// forma sencilla de trabajar con forms en react
// export default function Formularios() {
//   const [nombre, setNombre] = useState(''),
//     [sabor, setSabor] = useState(''),
//     [lenguaje, setLenguaje] = useState(''),
//     [terminos, setTerminos] = useState(false);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('El formulario ha sido enviado')
//   }
//     return (
//       <>
//         <h2>Formularios Controlados en React</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <label htmlFor="nombre">Nombre: </label>
//           <input
//             type="text"
//             id="Nombre"
//             name="nombre"
//             defaultValue={"Escribr tu nombre"}
//             value={nombre}
//             onChange={(e) => {
//               setNombre(e.target.value);
//             }}
//           />

//           <h4>Elije tu sabor favorito</h4>
//           <input
//             type="radio"
//             name="sabor"
//             id="chocolate"
//             value='chocolate'
//             defaultChecked
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="chocolate">Chocolate</label>
//           <input
//             type="radio"
//             name="sabor"
//             id="frutilla"
//             value='frutilla'
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="frutilla">Frutilla</label>
//           <input
//             type="radio"
//             name="sabor"
//             id="americana"
//             value='americana'
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="americana">Americana</label>
//           <input
//             type="radio"
//             name="sabor"
//             id="dulceDeLeche"
//             value="dulceDeLeche"
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="dulceDeLeche">Dulce de Leche</label>
//           <br />
//           <p>Elije un lenguaje de proramación favorito</p>

//           <select name="lenguaje" onChange={(e)=>{setLenguaje(e.target.value)}} defaultValue=''>
//             <option value="">---</option>
//             <option value="js">JavaScript </option>
//             <option value="php">PHP</option>
//             <option value="py">Python</option>
//             <option value="go">GO</option>
//             <option value="rb">Ruby</option>
//           </select>

//           <br />
//           <label htmlFor="terminos">Acepto los téminos y condiciones</label>
//           <input type="checkbox" name="terminos" id="terminos"
//             onChange={(e) => { setTerminos(e.target.checked) }}
//           />

//           <br />
//           <input type="submit" value="enviar" />

//         </form>
//       </>
//     );
// }
//Forma avanzada
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleChecked = (e) => { 
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario ha sido enviado");
  };
  return (
    <>
      <h2>Formularios Controlados en React</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="Nombre"
          name="nombre"
          // defaultValue={"Escribr tu nombre"}
          value={form.nombre}
          onChange={handleChange}
        />

        <h4>Elije tu sabor favorito</h4>
        <input
          type="radio"
          name="sabor"
          id="chocolate"
          value="chocolate"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="chocolate">Chocolate</label>
        <input
          type="radio"
          name="sabor"
          id="frutilla"
          value="frutilla"
          onChange={handleChange}
        />
        <label htmlFor="frutilla">Frutilla</label>
        <input
          type="radio"
          name="sabor"
          id="americana"
          value="americana"
          onChange={handleChange}
        />
        <label htmlFor="americana">Americana</label>
        <input
          type="radio"
          name="sabor"
          id="dulceDeLeche"
          value="dulceDeLeche"
          onChange={handleChange}
        />
        <label htmlFor="dulceDeLeche">Dulce de Leche</label>
        <br />
        <p>Elije un lenguaje de proramación favorito</p>

        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript </option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <label htmlFor="terminos">Acepto los téminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />

        <br />
        <input type="submit" value="enviar" />
      </form>
    </>
  );
}
