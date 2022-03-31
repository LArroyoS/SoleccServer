import React, {useState} from "react";

import PruebaPeticion from "../componentes/pruebaPeticion";
import CrearObjetoMongo from "../componentes/crearObjetoMongo";
import ModificarObjetoMongo from "../componentes/modificarObjetoMongo";
import EliminarObjetoMongo from "../componentes/eliminarObjetoMongo";
import ConsultarObjetoMongo from "../componentes/consultarObjetoMongo";
import PruebaMongo from "../componentes/pruebaMongo";
import PruebaQR from "../componentes/PruebaQR";
import PruebaPDF from "../componentes/PruebaPDF";
import CrearQR from "../componentes/crearQR";
import ProbarSesion from "../componentes/probarSesion";

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
      case 7: case "7":
        return (<PruebaQR></PruebaQR>);
      break;
      case 8: case "8":
        return (<PruebaPDF></PruebaPDF>);
      break;
      case 9: case "9":
        return (<CrearQR></CrearQR>);
      break;
      case 10: case "10":
        return (<ProbarSesion></ProbarSesion>);
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
        <option value={7}>Prueba QR</option>
        <option value={8}>Prueba PDF</option>
        <option value={9}>Generar QR tabla solecc</option>
      </select>
      <p> {componente} </p>
      { vista() }
    </div>
  )
}
