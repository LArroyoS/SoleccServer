//import dbConexion from "../../utilidades/conexion";
//dbConexion();

const POST = () => {
    return "POST";
}
const GET = () => {
    return "GET Todo";
}
  
export default function Index(req, res){
    res.status(200).json( { 
        index: "respuesta"
    });
}