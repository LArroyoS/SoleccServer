import mongoose from 'mongoose';

const PagoSchema = new mongoose.Schema({

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

const modeloPago = mongoose.models.Tipo_Pagos || mongoose.model('Tipo_Pagos', PagoSchema);

export default modeloPago;
