import mongoose from 'mongoose';

const ComprobanteVentasSchema = new mongoose.Schema({
    id_venta:{
        type: String,
        required: true,
        trim: true
    },
    img_comprobante:{
        type: String,
        required: true,
        trim: true
    },
    tipo_comprobante:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        required: true,
        trim: true
    },
    toString:{
        type: Object
    }
});

const modeloComprobanteVenta = mongoose.model('ComprobantesVentas', ComprobanteVentasSchema);

export default modeloComprobanteVenta;