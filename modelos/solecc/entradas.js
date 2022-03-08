import mongoose from 'mongoose';

const EntradaSchema = new mongoose.Schema({
    id_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    id_producto:{
        type: String,
        required: true,
        trim: true
    },
    id_usuario:{
        type: String,
        required: true,
        trim: true
    },
    precio_compra:{
        type: Number,
        required: true,
        trim: true
    },
    cantidad:{
        type: Number,
        required: true,
        trim: true
    },
    total:{
        type: Number,
        required: true,
        trim: true
    },
    status_pago:{
        type: Number,
        required: true,
        trim: true
    },
    id_tipo_pago:{
        type: String,
        required: true,
        trim: true
    },
    fecha_compra:{
        type: Date,
        required: true,
        trim: true
    },
    fecha_pago:{
        type: Date,
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

const modeloEntrada = mongoose.models.Entradas || mongoose.model('Entradas', EntradaSchema);

export default modeloEntrada;
