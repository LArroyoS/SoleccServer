import dbConexion from "../../../utilidades/conexion";
import Notas from "../../../modelos/notas";

dbConexion();

export default async (req, res) => {
    
    const { method } = req;

    switch(method){
        case "GET":
            const notes = await Notas.find({});
            res.status(200).json({ success: true, data: notes});
        break;
        case "POST":
            const note = await Notas.create(req.body);
            res.status(200).json({ success: true, data: note});
        break;
        default:
            res.status(400).json({ success: false });
        break;
      }
}