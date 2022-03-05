import mongoose from 'mongoose';

const ProductosSchema = new mongoose.Schema ({

    id_categoria:{
        type: String,
        required: true,
        trim: true
    },
    id_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    nom_producto:{
        type: String,
        required: true,
        trim: true
    },
    descripcion_c:{
        type: String,
        required: true,
        trim: true
    },
    descripcion_l:{
        type: String,
        required: true,
        trim: true
    },
    prec_compra:{
        type: String,
        required: true,
        trim: true
    },
    detalle:{
        type: String,
        required: true,
        trim: true
    },
    qr_producto:{
        type: Boolean,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        required: true,
        trim: true
    },
    toString:{
        title: {
            type: String,
            trim: true
        },
        subtitle: {
            type: String,
            trim: true,
        }
    },
});

const modeloProducto = mongoose.model('Productos', ProductosSchema);

export default modeloProducto;
