import mongoose from 'mongoose';

const NotasEsquema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    descripcion: {
        type: String
    }
});

const Notas = mongoose.model("Notas", NotasEsquema);

export default Notas;