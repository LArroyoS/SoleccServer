import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {

    const { method, body } = req;
    const tabla = "usuarios";
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            const find = await Obj.find(body)
                .then((obj) => { res.status(200).json( { status: obj })})
                .catch((error) => { res.status(200).json({ status: false} )});
            break;
    //------------------------------------------------------------------------------------
    //Metodo desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}