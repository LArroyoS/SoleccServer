import QRCode from "qrcode";

const createQR = async() => {
    try{
        const response = await QRCode.toDataURL('sOY UN QR');
        return response
    }
    catch(error){
        return null;
    }
}

export default async function Index(req, res){
    var qr = await createQR();
    res.status(200).json({ 
        QR: qr
    });
}