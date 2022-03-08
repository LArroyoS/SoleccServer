import React, {useState} from "react";

import PruebaPeticion from "../componentes/pruebaPeticion";
import CrearObjetoMongo from "../componentes/crearObjetoMongo";
import ModificarObjetoMongo from "../componentes/modificarObjetoMongo";
import EliminarObjetoMongo from "../componentes/eliminarObjetoMongo";
import ConsultarObjetoMongo from "../componentes/consultarObjetoMongo";
import PruebaMongo from "../componentes/pruebaMongo";

export default function Home() {

  const [componente,setComponente] = useState(1);

  const cambio = ({ target }) => {
    setComponente(target.value);
  }
  const vista = () => {
    switch(componente){
      case 1: case "1":
        return (<PruebaPeticion></PruebaPeticion>); 
      break;
      case 2: case "2":
        return (<PruebaMongo></PruebaMongo>);
      break;
      case 3: case "3":
        return (<CrearObjetoMongo></CrearObjetoMongo>);
      break;
      case 4: case "4":
        return (<ModificarObjetoMongo></ModificarObjetoMongo>);
      break;
      case 5: case "5":
        return (<ConsultarObjetoMongo></ConsultarObjetoMongo>);
      break;
      case 6: case "6":
        return (<EliminarObjetoMongo></EliminarObjetoMongo>);
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
        <option value={2}>PruebaMongoAtlas</option>
        <option value={3}>Crear Objetos Formularios</option>
        <option value={4}>Modificar Objetos Formularios</option>
        <option value={5}>Consultar Objeto Formularios</option>
        <option value={6}>Eliminar Objetos Formularios</option>
      </select>
      <p> {componente} </p>
      { vista() }
    </div>
  )
}
