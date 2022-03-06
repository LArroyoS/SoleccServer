import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
    nom_categoria:{
        type: String,
        required: true,
        trim: true
    },
    des_categoria:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        required: true,
        trim: true
    }
});

const modeloCategoria = mongoose.model('Categorias', CategoriaSchema);

export default modeloCategoria;
