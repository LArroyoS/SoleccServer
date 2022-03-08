import mongoose from 'mongoose';

const TipoUsuarioSchema = new mongoose.Schema({

    nom_tipo:{
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

const modeloTipoUsuario = mongoose.models.Tipo_Usuarios || mongoose.model('Tipo_Usuarios', TipoUsuarioSchema);

export default modeloTipoUsuario;
