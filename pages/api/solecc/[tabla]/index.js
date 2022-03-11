import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {
    const { method, body, query } = req;
    const tabla = query["tabla"];
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
    //------------------------------------------------------------------------------------
    //GET
        case "GET":
            const find = await Obj.find({})
                .then((obj) => { res.status(200).json(obj)})
                .catch((error) => { res.status(200).json({ status: error} )});
            break;
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            res.status(200).json({ body: typeof(body) } )
            /*
            const visualizar = ObtenerModelo.ToString(tabla,body);
            const cuerpo = (visualizar!=null)? 
                {...body, activo: true, toString: visualizar} :
                body;
            const create = await Obj.create(cuerpo)
                .then((obj) => {  res.status(200).json({ status: "Se Guardo Correctamente"} )})
                .catch((error) => {  res.status(200).json({ status: error} )});
            */
            break;
    //------------------------------------------------------------------------------------
    //Metodo desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}