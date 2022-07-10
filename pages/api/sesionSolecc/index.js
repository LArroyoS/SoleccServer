import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {

    const { method, body } = req;
    const tabla1 = "usuarios";
    const Obj1 = ObtenerModelo.Objeto(tabla);
    const tabla2 = "usuarios";
    const Obj2 = ObtenerModelo.Objeto(tabla);
    let status = null;
    switch (method) {
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            const usuario = await Obj1.findOne(body)
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