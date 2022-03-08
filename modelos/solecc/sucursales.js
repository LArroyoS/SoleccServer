import mongoose from 'mongoose';

const SucursalSchema = new mongoose.Schema({
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
    toString:{
        type: Object
    }
});

const modeloSucursal = mongoose.models.Sucursales || mongoose.model('Sucursales', SucursalSchema);

export default modeloSucursal;
