import dbConexion from "../../../utilidades/conexion";
import Notas from "../../../modelos/notas";
import modeloAlmacen from "../../../modelos/solecc/almacen";
import modeloCategoria from "../../../modelos/solecc/categorias";
import modeloComprobanteEntrada from "../../../modelos/solecc/comprobantes_entradas";
import modeloComprobanteVenta from "../../../modelos/solecc/comprobantes_ventas";
import modeloDireccionProveedor from "../../../modelos/solecc/direcciones_proveedor";
import modeloDireccionUsuario from "../../../modelos/solecc/direcciones_usuarios";
import modeloEntrada from "../../../modelos/solecc/entradas";
import modeloProductoAlmacen from "../../../modelos/solecc/producto_almacen";
import modeloProducto from "../../../modelos/solecc/productos";
import modeloProveedor from "../../../modelos/solecc/proveedores";
import modeloRegion from "../../../modelos/solecc/regiones";
import modeloSucursal from "../../../modelos/solecc/sucursales";
import modeloPago from "../../../modelos/solecc/tipo_pago";
import modeloTipoUsuario from "../../../modelos/solecc/tipo_usuarios";
import modeloUsuario from "../../../modelos/solecc/usuarios";
import modeloVenta from "../../../modelos/solecc/ventas";

dbConexion();

export default async (req, res) => {
    res.status(200).json({ success: true });
    /*
    const { method, body, query } = req;
    const tabla = query["id"];
    res.status(400).json({ tabla: tabla });
    
    const Obj = objeto(tabla);
    const visualizar = toString(tabla,body);
    const cuerpo = {...body, toString: visualizar};
    switch (method) {
        case "GET":
            const find = await Obj.find({});
            res.status(200).json({ success: true, data: find });
            break;
        case "POST":
            const create = await Obj.create(cuerpo);
            res.status(200).json({ success: true, data: create });
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
    */
}