import mongoose from 'mongoose';

const ComprobanteVentasSchema = new mongoose.Schema ({

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
    toString: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    }

});

const modeloComprobanteVenta = mongoose.model('ComprobantesEntradas', ComprobanteVentasSchema);

export default modeloComprobanteVenta;
