import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {

    const { method, body } = req;
    const Obj1 = ObtenerModelo.Objeto("usuarios");
    const Obj2 = ObtenerModelo.Objeto("tipo_usuarios");
    let status = { status: null };
    switch (method) {
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            await Obj1.findOne(body)
                .then((obj) => { status = { status: obj } } )
                .catch((error) => { status = { status: false } } );
            res.status(200).json(status);
            break;
    //------------------------------------------------------------------------------------
    //Metodo desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}