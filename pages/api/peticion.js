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
  res.status(200).json( { funciona: ok} );
}