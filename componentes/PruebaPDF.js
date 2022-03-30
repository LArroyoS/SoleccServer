import React, { useState } from "react";

export default function PruebaQR() {
  
  const [createPDF, setPDF ] = useState(null);
  const click = async () => {
    const res = await fetch("/api/pruebaPDF/",
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "GET",
      }
    );
    const file = await res.json();
    setPDF( "data:"+file.data+";"+file.encoding+","+file.base64);
  }
  const click2 = async () => {
    setPDF(null);
  }
  const verPDF = (data) => {
    return (
      <object
        data={data}
        type="application/pdf" 
        width="100%" 
        height="500px">
      </object>
    );
  }
  return (
    <div>
      <h1>Prueba PDF</h1>
      <button onClick={click} >Generar PDF</button>
      <button onClick={click2} >Borrar</button>
      <p>{createPDF}</p>
      {verPDF(createPDF)}
    </div>
  )
}