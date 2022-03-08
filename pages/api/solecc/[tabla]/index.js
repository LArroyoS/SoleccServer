import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {
    const { method, body, query } = req;
    const tabla = query["tabla"];
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
        case "GET":
            const find = await Obj.find({});
            res.status(200).json({ success: true, data: find });
            break;
        case "POST":
            const visualizar = ObtenerModelo.ToString(tabla,body);
            const cuerpo = (visualizar!=null)? 
                {...body, activo: true, toString: visualizar} :
                body;
            const create = await Obj.create(cuerpo);
            res.status(200).json({ success: true, data: create });
            break;
            
        default:
            res.status(400).json({ success: false });
            break;
    }

}