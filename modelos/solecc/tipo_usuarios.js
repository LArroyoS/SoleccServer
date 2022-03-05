import mongoose from 'mongoose';

const TipoUsuarioSchema = new mongoose.Schema ({

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
        title: {
            type: String,
            trim: true
        },
        subtitle: {
            type: String,
            trim: true
        }
    }
});

const modeloTipoUsuario = mongoose.model('Tipo_Usuarios', TipoUsuarioSchema);

export default modeloTipoUsuario;
