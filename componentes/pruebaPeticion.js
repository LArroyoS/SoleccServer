import React, { useState } from "react";

export default function PruebaPeticion() {
  const [peticion, setPeticion] = useState("Nula");
  const [respuesta, setRespuesta] = useState("Seleccione una opcion");
  const [ruta, setRuta] = useState("")
  const [metodo, setMetodo] = useState(null)
  const rutaConstante = "https://solecc-next.netlify.app/api/peticion/";
  
  const cambio = ({ target }) => {
    const valor = target.value;
    setMetodo(valor.replace("ALL",""));
    setPeticion(valor);
    setRuta(
      (valor=="GETALL" || valor=="POSTALL")? 
      rutaConstante : rutaConstante+valor
    );
  }
  
  const click = async () => {
    if(metodo=="Nula"){
      setRespuesta("Seleccione una opcion");
    }
    else{
      var res = null;
      // Fetch data from external API
      switch(metodo){
        case "GET":
          res = await fetch(ruta);
        break;
        default:
          res = await fetch(ruta,
            { 
              method: metodo,
              body: JSON.stringify({ datos: metodo }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
        break;
      }
      const data = await res.json();
      // Pass data to the page via props
      setRespuesta(data);
    }
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
      <h3>Metodo { metodo }</h3>
      <h2>Respuesta { JSON.stringify(respuesta) }</h2>
    </div>
  )
}