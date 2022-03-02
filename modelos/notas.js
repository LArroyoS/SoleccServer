import * as mongoose from "mongoose";

const NotasEsquema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    }
});

module.export = mongoose.models.Notas 
    || mongoose.model("Notas", NotasEsquema);