import mongoose from 'mongoose';

const ProductoAlmacenSchema = new mongoose.Schema ({
    id_almacen:{
        type: String,
        required: true,
        trim: true
    },
    id_producto:{
        type: String,
        required: true,
        trim: true
    },
    stok_deseado:{
        type: String,
        required: true,
        trim: true
    },
    stock_real:{
        type: String,
        required: true,
        trim: true
    },
    precio_compra: {
        type: Double,
        required: true,
        trim: true
    },
    precio_venta: {
        type: Double,
        required: true,
        trim: true
    },
    activo:{
        type: String,
        required: true,
        trim: true
    },
    toString: {
        title: {
            type: String,
            trim: true
        },
        subtitle: {
            type: String,
            trim: true
        }
    }
});

const modeloProductoAlmacen = mongoose.model('ProductoAlmacenes', ProductoAlmacenSchema);

export default modeloProductoAlmacen;
