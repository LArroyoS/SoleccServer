import mongoose from 'mongoose';

const NotasEsquema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    descripcion: {
        type: String
    }
});

module.export = mongoose.models.Notas 
    || mongoose.model("Notas", NotasEsquema);