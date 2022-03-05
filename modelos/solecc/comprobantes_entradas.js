import mongoose from 'mongoose';

const ComprobanteEntradaSchema = new mongoose.Schema ({

    id_entrada:{
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

const modeloComprobanteEntrada = mongoose.model('ComprobantesEntradas', ComprobanteEntradaSchema);

export default modeloComprobanteEntrada;
