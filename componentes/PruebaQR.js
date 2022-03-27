import React, { useState } from "react";
import QRCode from "qrcode";

export default function PruebaQR() {
  const [ QR, setQR ] = useState(null);

  const click = async() => {
    const res = await fetch("/api/pruebaQR/",
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "GET",
      }
    );
    const data = await res.json();
    setQR(data.QR);
  }
  const click2 = () => {
    setQR(null);
  }

  return (
    <div>
      <p>{JSON.stringify(QR)}</p>
      <button onClick={click}>CrearQR</button>
      <button onClick={click2}>Borrar</button>
      <br/>
      <img src={QR} 
      alt="QR"/>
    </div>
  )
}