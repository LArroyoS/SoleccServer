import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
    nom_usuario: {
        type: String,
        required: true,
        trim: true
    },
    email_usuario: {
        type: String,
        required: true,
        trim: true,
    },
    tel_usuario: {
        type: String,
        required: true,
        trim: true,
    },
    pass_usuario: {
        type: String,
        required: true,
        trim: true
    },
    id_tipo_usuario:{
        type: String,
        required: true,
        trim: true
    },
    id_sucursal:{
        type: String,
        required: true,
        trim: true
    },
    activo:{
        type: Boolean,
        required: true,
        trim: true
    },
    terminosYCondiciones:{
        type: Boolean,
        default: false
    },
    cambiarPassword:{
        type: Boolean,
        default: True
    },
    toString:{
        type: Object
    }
});

const modeloUsuario = mongoose.models.Usuarios || mongoose.model('Usuarios', UsuarioSchema);

export default modeloUsuario;
