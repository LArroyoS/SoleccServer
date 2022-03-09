import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async(req, res) => {
    const { method, body, query } = req;
    const tabla = query["tabla"];
    const id = query["id"];
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
        case "GET":
            const find = await Obj.findById(id);
            res.status(200).json({ success: true, data: find });
            break;
        case "POST": case "PUT":
            const visualizar = ObtenerModelo.ToString(tabla,body);
            const cuerpo = (visualizar!=null)? 
                {...body, activo: true, toString: visualizar} :
                body;
            const modificar = await Obj.findByIdAndUpdate(id, cuerpo);
            res.status(200).json({ success: true, data: modificar });
            break;
        case "DELETE":
            const eliminar = await Obj.findByIdAndRemove(id);
            res.status(200).json({ success: true, data: eliminar });
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}