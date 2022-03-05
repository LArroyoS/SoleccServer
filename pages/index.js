import React, {useState} from "react";

import PruebaPeticion from "../componentes/pruebaPeticion";
import PruebaFormulario from "../componentes/pruebaFormulario";
import PruebaMongo from "../componentes/pruebaMongo";

export default function Home() {

  const [componente,setComponente] = useState(1);

  const cambio = ({ target }) => {
    setComponente(target.value);
  }
  const vista = () => {
    switch(componente){
      case 1:
        return (<PruebaPeticion></PruebaPeticion>); 
      break;
      case 2:
        return (<PruebaFormulario></PruebaFormulario>);
      break;
      case 3:
        return (<PruebaMongo></PruebaMongo>);
      break;
      default:
        return (<p>Se reconoce componente {componente} como {typeof(componente)} </p>)
      break;
    }
  }
  return (
    <div>
      <select onChange={cambio}>
        <option value={1}>Prueba Peticion</option>
        <option value={2}>Formularios</option>
        <option value={3}>PruebaMongoAtlas</option>
      </select>
      <p> {componente} </p>
      { vista() }
    </div>
  )
}
