import mongoose from 'mongoose';

const conexion = {};

async function dbConexion(){
  if (conexion.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  conexion.isConnected = db.connections[0].readyState;
  console.log(conexion.isConnected);
}

export default dbConexion;
