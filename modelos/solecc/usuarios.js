import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema ({
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
    id_direccion:{
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

const modeloUsuario = mongoose.model('Usuarios', UsuarioSchema);

export default modeloUsuario;
