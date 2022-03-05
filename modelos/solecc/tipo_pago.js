import mongoose from 'mongoose';

const PagoSchema = new mongoose.Schema ({

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
    toString: {
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

const modeloPago = mongoose.model('Tipo_Pagos', PagoSchema);

export default modeloPago;
