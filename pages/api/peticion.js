import dbConexion from "../../utilidades/conexion";

dbConexion();

const GET = () => {
  return "GET";
}

const POST = () => {
  return "POST";
}
const PUT = () => {
  return "PUT";
}

const DELETE = () => {
  return "DELETE";
}

export default function Formulario(req, res){
  var respuesta = "default";
  switch(req.method){
    case "GET":
      respuesta =  GET();
    break;
    case "POST":
      respuesta = POST(); 
    break;
    case "PUT":
      respuesta = PUT(); 
    break;
    case "DELETE":
      respuesta = DELETE(); 
    break;
    default:
      respuesta = "default";
    break;
  }
  res.status(200).json( { peticion: respuesta } );
}