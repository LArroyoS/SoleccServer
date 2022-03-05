import dbConexion from "../../utilidades/conexion";

dbConexion();

export default async (req, res) => {
    res.json({ mongo: "prueba" });
}