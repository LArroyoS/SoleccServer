import mongoose from 'mongoose';

const SucursalSchema = new mongoose.Schema ({
    nom_sucursal:{
        type: String,
        required: true,
        trim: true
    },
    estado:{
        type: String,
        required: true,
        trim: true
    },
    municipio: {
        type: String,
        required: true,
        trim: true
    },
    id_region:{
        type: String,
        required: true,
        trim: true
    },
    activo: {
        type: Boolean,
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
        },
    }
});

const modeloSucursal = mongoose.model('Sucursales', SucursalSchema);

export default modeloSucursal;
