import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../../modelos/obtenerModelo";
import cors from "cors";

dbConexionSolecc();

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export default async (req, res) => {
    await runMiddleware(req, res, cors)

    const { method, body, query } = req;
    const tabla = query["tabla"];
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
    //------------------------------------------------------------------------------------
    //GET
        case "GET":
            const find = await Obj.find({})
                .then((obj) => { res.status(200).json( { status: obj })})
                .catch((error) => { res.status(200).json({ status: error} )});
            break;
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            const visualizar = ObtenerModelo.ToString(tabla,body);
            const cuerpo = (visualizar!=null)? 
                {...body, activo: true, toString: visualizar} :
                body;
            const create = await Obj.create(cuerpo)
                .then((obj) => {  res.status(200).json({ status: "Se Guardo Correctamente"} )})
                .catch((error) => {  res.status(200).json({ status: error} )});
            break;
    //------------------------------------------------------------------------------------
    //Metodo desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}