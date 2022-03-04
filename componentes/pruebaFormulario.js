import React, {useState, useEffect} from "react";
import tablas from "../modelos/estatico/tabla";
import modelo from "../modelos/estatico/modelo";
import form from "../modelos/estatico/form";
import ConstruirFormulario from "./crearFormulario";

export default function PruebaFormulario() {
  const [tabla,setTabla] = useState("");
  const [formulario, setFormulario] = useState([]);
  const [objeto, setObjeto] = useState({});

  useEffect(() => {
    setFormulario(form[tabla]);
    setObjeto(modelo[tabla]);
  }, [tabla]);

  const cambio = ({ target }) => {
    setTabla(target.value);
  }
  const opciones = () => {
    return tablas.map((value) => {
      return <option value={value}>{value}</option>
    });
  }

  const onChangeValue = (nombre, value) => {
    setObjeto({ ...objeto, [nombre]: value });
  };

  const onChangeValueSelect = (nombre, value) => {
    setObjeto({ ...objeto, [nombre]: JSON.parse(value) });
  };

  return (
    <div>
      <h1>Prueba Formulario</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      {tabla !== ""? 
        (
          <div>
            <ConstruirFormulario
              formulario={formulario}
              state={objeto}
              onChangeValue={onChangeValue}
              onChangeValueSelect={onChangeValueSelect}
            />
            <br />
            <button onClick={guardar}> Guardar </button>
          </div>
        ) : 
        (
          <p>Selecicone una tabla</p>
        )
      }
    </div>
  )
}