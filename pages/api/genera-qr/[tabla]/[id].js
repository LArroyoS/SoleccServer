import dbConexionSolecc from "../../../../utilidades/conexionSolecc";
import QRCode from "qrcode";

dbConexionSolecc();

//Metodo
const createQR = async(tabla,id) => {
    const obj = { tabla: tabla ,id: id };
    const texto = JSON.stringify(obj);
    try{
        const response = await QRCode.toDataURL(texto);
        return response
    }
    catch(error){
        return null;
    }
}

//------------------------------------------------------------------------------------
//Petición
export default async(req, res) => {

    const { query } = req;
    const tabla = query["tabla"];
    const id = query["id"];
    
    if((tabla!==null && tabla!==undefined) && 
        (id!==null && id !==undefined)){
        
        var qr = await createQR(tabla,id);
        res.status(200).json({ 
            QR: qr
        });
    }
    else{
        res.status(200).json({ 
            QR: null
        });
    }
}