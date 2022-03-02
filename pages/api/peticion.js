const GET = () => {
  return "GET";
}

const POST = () => {
  return "POST";
}
const PUT = () => {
  return "DELETE";
}

const DELETE = () => {
  return "DELETE";
}

export default function Formulario(req, res){
  var respuesta = "default";
  switch(req.method){
    case "GET":
      respuesta.peticion =  GET();
    break;
    case "POST":
      respuesta.peticion = POST(); 
    break;
    case "PUT":
      respuesta.peticion = PUT(); 
    break;
    case "DELETE":
      respuesta.peticion = DELETE(); 
    break;
  }
  res.status(200).json( { peticion: respuesta } );
}