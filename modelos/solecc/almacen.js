import mongoose from 'mongoose';

const AlmacenSchema = new mongoose.Schema({
    nom_almacen:{
        type: String,
        required: true,
        trim: true
    },
    id_usuario:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: String,
        required: true,
        trim: true
    },
    toString:{
        type: Object
    }
});

const Almacenes = mongoose.models.Almacenes || mongoose.model('Almacenes', AlmacenSchema);

export default Almacenes;
