import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {

    const { method, body } = req;
    const Obj1 = ObtenerModelo.Objeto("usuarios");
    const Obj2 = ObtenerModelo.Objeto("tipo_usuarios");
    let status = {};
    switch (method) {
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            const find = await Obj.findOne(body)
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