import React, { useState } from "react";

export default function Home() {
  const [peticion, setPeticion] = useState("Nula");
  const [respuesta, setRespuesta] = useState({ peticion: "default" });
  const [ruta, setRuta] = useState("")
  const rutaConstante = "https://solecc-next.netlify.app/api/peticion/";
  const cambio = ({ target }) => {
    setPeticion(target.value);
  }
  const click = async () => {
    const metodo = peticion.replace("ALL","");
    const id = (peticion!="POST")? peticion:"";
    const setRuta = (peticion=="GETALL" || peticion=="POSTALL")? 
      rutaConstante : rutaConstante+id
    // Fetch data from external API
    const res = await fetch(ruta,
      { method: metodo,
        headers: {
          'Content-Type': 'application/json'
        },
        body: { datos: metodo }
      }
    );
    const data = await res.json();
    // Pass data to the page via props
    setRespuesta(data);
  }
  return (
    <div>
      <h1>Formulario</h1>
      <label>Tipo de peticion</label>
      <br></br>
      <select name="peticion" onChange={cambio}>
        <option value="Nula">--Seleccione un tipo formulario--</option>
        <option value="GETALL">GET</option>
        <option value="GET">GET</option>
        <option value="POSTALL">POST</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <br></br>
      <button onClick={click}>enviar</button>
      <br></br>
      <h3>Peticion { peticion }</h3>
      <h3>Ruta { ruta }</h3>
      <br></br>
      <h2>Respuesta { JSON.stringify(respuesta) }</h2>
    </div>
  )
}
