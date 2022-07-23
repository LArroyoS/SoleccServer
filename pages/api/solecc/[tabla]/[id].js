import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import ObtenerModelo from "../../../../modelos/obtenerModelo";
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
});

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

dbConexionSolecc();

//------------------------------------------------------------------------------------
//Petición
export default async(req, res) => {

    await runMiddleware(req, res, cors);
    
    const { method, body, query } = req;
    const tabla = query["tabla"];
    const id = query["id"];
    const Obj = ObtenerModelo.Objeto(tabla);

    switch (method) {
    //------------------------------------------------------------------------------------
    //GET
        case "GET":
            const find = await Obj.findById(id)
                .then((obj) => { res.status(200).json({ status: obj })})
                .catch((error) => { res.status(200).json({ status: error} )});
            break;
    //------------------------------------------------------------------------------------
    //POST/PUT
        case "POST": case "PUT":
            const visualizar = ObtenerModelo.ToString(tabla,body);
            const cuerpo = (visualizar!=null)? 
                {...body, activo: true, 
                    $set:{ "toString.title": visualizar.title, "toString.subtitle": visualizar.subtitle}
                } :
                body;
            const modificar = await Obj.findByIdAndUpdate(id, cuerpo)
                .then((obj) => { res.status(200).json({ status: "Se actualizo correctamente" } )})
                .catch((error) => { res.status(200).json({ status: error} )});;
            break;
    //------------------------------------------------------------------------------------
    //DELETE
        case "DELETE":
            const eliminar = await Obj.findByIdAndRemove(id)
                .then((obj) => { res.status(200).json( {status: "Se Borro Correctamente"} )})
                .catch((error) => { res.status(200).json({ status: error} )});
            break;
    //------------------------------------------------------------------------------------
    //Metodo Desonocido
        default:
            res.status(400).json({ success: false });
            break;
    }

}