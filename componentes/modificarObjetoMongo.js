import React, {useState, useEffect} from "react";
import tablas from "../modelos/estatico/tabla";
import modelo from "../modelos/estatico/modelo";
import form from "../modelos/estatico/form";
import ConstruirFormulario from "./crearFormulario";
import Link from 'next/link'

export default function ModificarObjetoMongo() {
  const [tabla,setTabla] = useState("");
  const [formulario, setFormulario] = useState([]);
  const [objeto, setObjeto] = useState({});
  const [id,setId] = useState("");

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
      <h1>Modificar Objeto</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      {tabla !== ""? 
        (
          <div>
            <br></br>
            <Link href={"/api/solecc/"+tabla}>
              <a>Obtener Lista tabla</a>
            </Link>
            <br></br>
            <p>id: </p>
            <input name="id" value={id} onChange={({target}) => setId(target.value)}></input>
            <br></br>
            <form method="PUT" action={"/api/solecc/"+tabla+"/"+id}>
              <ConstruirFormulario
                formulario={formulario}
                state={objeto}
                onChangeValue={onChangeValue}
                onChangeValueSelect={onChangeValueSelect}
              />
              <br />
              <button type="submit"> Guardar </button>
            </form>
          </div>
        ) : 
        (
          <p>Selecicone una tabla</p>
        )
      }
    </div>
  )
}