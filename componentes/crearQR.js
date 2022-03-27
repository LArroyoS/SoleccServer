import React, {useState, useEffect} from "react";
import tablas from "../modelos/estatico/tabla";

export default function CrearQR() {
  const [tabla,setTabla] = useState("");
  const [Lista, setLista] = useState([]);
  const [ QR, setQR ] = useState(null);

  useEffect(() => {
    listar();
  },[tabla])

  const cambio = ({ target }) => {
    setTabla(target.value);
  }

  const opciones = () => {
    return tablas.map((value) => {
      return <option value={value}>{value}</option>
    });
  }

  const listar = async () => {
    const res = await fetch("/api/solecc/"+tabla+"");
    const data = await res.json();
    setLista(data.status);
  }

  const Listado = () => {
    return Lista.map((item) => {
        return (
          <div>
            <p style={{display: "inline"}}>{item.toString.title}</p>
            <button style={{display: "inline"}} 
              onClick={async() => await solicitarQR(item._id) }>
                Generar QR
            </button>
          </div>
        );
    });
  }

  const solicitarQR = async (id) => {
    const res = await fetch("/api/genera-qr/"+tabla+"/"+id);
    const data = await res.json();
    setQR(data.QR);
  }

  return (
    <div>
      <h1>Crear QR</h1>
      <label>Tipo de tabla</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      {(Lista !== null && 
        Lista!==undefined && 
        Array.isArray(Lista))? 
        (
          <div>
            {Listado()}
            <img src={QR} alt="QR"/>
          </div>
        ) : 
        (
          <p>Selecicone una tabla</p>
        )
      }
    </div>
  )
}