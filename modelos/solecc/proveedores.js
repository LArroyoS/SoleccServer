import mongoose from 'mongoose';

const ProveedorSchema = new mongoose.Schema({
    nom_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    rfc_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    tel_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    email_proveedor:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        trim: true,
        required: true
    },
    toString:{
        type: Object
    }
});

const modeloProveedor = mongoose.models.Proveedores || mongoose.model('Proveedores', ProveedorSchema);

export default modeloProveedor;
