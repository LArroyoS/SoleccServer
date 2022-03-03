import React, {useState} from "react";
import PruebaPeticion from "../componentes/pruebaPeticion";
import PruebaFormulario from "../componentes/pruebaFormulario";

export default function Home() {

  const [componente,setComponente] = useState(1);

  const cambio = ({ target }) => {
    setPeticion(target.value);
  } 
  return (
    <div>
      <select onChages={cambio}>
        <option value="1">Prueba Peticion</option>
        <option value="2">Formularios</option>
      </select>
      {(componente=="1")? 
        (<PruebaPeticion></PruebaPeticion>)
        :
        (<PruebaFormulario></PruebaFormulario>)
      }
    </div>
  )
}
