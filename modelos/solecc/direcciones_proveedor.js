import mongoose from 'mongoose';

const DireccionProveedorSchema = new mongoose.Schema ({
    id_usuario:{
        type: String,
        required: true,
        trim: true
    },
    pais:{
        type: String,
        required: true,
        trim: true
    },
    estado:{
        type: String,
        required: true,
        trim: true
    },
    domicilio:{
        type: String,
        required: true,
        trim: true
    },
    referencia:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        trim: true,
        required: true
    }
});

const modeloDireccionProveedor = mongoose.model('DireccionesProveedores', DireccionProveedorSchema);

export default modeloDireccionProveedor;
