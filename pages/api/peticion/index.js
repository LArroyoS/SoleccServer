const POST = () => {
    return "POST Solo";
}
const GET = () => {
    return "GET Todo";
}
  
export default function Index(req, res){
    const body = req.body;
    var respuesta = "";
    switch(req.method){
        case "POST":
            respuesta = POST(); 
        break;
        default:
            respuesta = GET(); 
        break;
    }
    res.status(200).json( { 
        peticion: respuesta
    });
}