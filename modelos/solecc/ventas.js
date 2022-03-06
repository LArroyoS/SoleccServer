import mongoose from 'mongoose';

const VentaSchema = new mongoose.Schema({
    id_prod_alm:{
        type: String,
        required: true,
        trim: true
    },
    precio_compra:{
        type: Number,
        required: true,
        trim: true
    },
    precio_venta:{
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

const modeloVenta = mongoose.model('Ventas', VentaSchema);

export default modeloVenta;
