import mongoose from 'mongoose';

const RegionSchema = new mongoose.Schema({
    nom_region:{
        type: String,
        required: true,
        trim: true
    },
    desc_region:{
        type: String,
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

const modeloRegion = mongoose.models.Regiones || mongoose.model('Regiones', RegionSchema);

export default modeloRegion;
