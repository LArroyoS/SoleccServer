import mongoose from 'mongoose';

const VentaSchema = new mongoose.Schema ({

    id_prod_alm:{
        type: String,
        required: true,
        trim: true
    },
    precio_compra:{
        type: Double,
        required: true,
        trim: true
    },
    precio_venta:{
        type: Double,
        required: true,
        trim: true
    },
    cantidad:{
        type: Int,
        required: true,
        trim: true
    },
    total:{
        type: Double,
        required: true,
        trim: true
    },
    status_pago:{
        type: Int,
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

const modeloVenta = mongoose.model('Ventas', VentaSchema);

export default modeloVenta;
