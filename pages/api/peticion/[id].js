//import dbConexion from "../../utilidades/conexion";
//dbConexion();

const GET = () => {
  return "GET Elemento";
}
const POST = () => {
  return "POST Actualizar";
}
const PUT = () => {
  return "PUT";
}
const DELETE = () => {
  return "DELETE";
}

export default function Formulario(req, res){
  const query = req.query;
  const body = req.body;
  var respuesta = "";
  switch(req.method){
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
      respuesta =  GET();
    break;
  }
  res.status(200).json( { 
    peticion: respuesta,
    query: query,
    body: body
  });
}