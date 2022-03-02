//import dbConexion from "../../utilidades/conexion";
//dbConexion();

const POST = () => {
    return "POST";
}
const GET = () => {
    return "GET Todo";
}
  
export default function Formulario(req, res){
    const query = req.query;
    const body = req.body;
    switch(req.method){
        case "POST":
        respuesta = POST(); 
        break;
        case "GET":
        respuesta = GET(); 
        break;
        default:
        respuesta = "default";
        break;
    }
    res.status(200).json( { 
        peticion: respuesta,
        query: query,
        body: body
    });
}