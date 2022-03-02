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
  }
  res.status(200).json( { peticion: respuesta } );
}