import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../modelos/obtenerModelo";

dbConexionSolecc();

export default async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    
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
            if(status.status){
                await Obj2.findById(status.status.id_tipo_usuario)
                    .then((obj) => { status.rol = obj.nom_tipo })
                    .catch((error) => { status.rol = "Colaborador" });
            }
            res.status(200).json(status);
            break;
    //------------------------------------------------------------------------------------
    //Metodo desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}