import dbConexionSolecc from "../../../utilidades/conexionSolecc";
import Notas from "../../../modelos/notas";
import Almacenes from "../../../modelos/solecc/almacen";
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

dbConexionSolecc();

const objeto = (tabla) => {
    switch (tabla) {
        case "almacenes":
            return modeloAlmacen;
            break;
        case "categorias":
            return modeloCategoria;
            break;
        case "comprobantes_ventas":
            return modeloComprobanteVenta;
            break;
        case "comprobantes_entradas":
            return modeloComprobanteEntrada;
            break;
        case "direcciones_usuarios":
            return modeloDireccionUsuario;
            break;
        case "direcciones_proveedores":
            return modeloDireccionProveedor;
            break;
        case "entradas":
            return modeloEntrada;
            break;
        case "producto_almacenes":
            return modeloProductoAlmacen;
            break;
        case "productos":
            return modeloProducto;
            break;
        case "proveedores":
            return modeloProveedor;
            break;
        case "regiones":
            return modeloRegion;
            break;
        case "sucursales":
            return modeloSucursal;
            break;
        case "tipo_pagos":
            return modeloPago;
            break;
        case "tipo_usuarios":
            return modeloTipoUsuario;
            break;
        case "tipo_usuarios":
            return modeloUsuario;
            break;
        case "ventas":
            return modeloVenta;
            break;
        default:
            return Notas;
            break;
    }
}

const toString = (tabla,body) => {
    var ver = {
        title: "",
        subtitle: ""
    }
    switch (tabla) {
        case "almacenes":
            ver.title = body.nom_almacen;
            ver.subtitle = body.nom_almacen;
            break;
        case "categorias":
            ver.title = body.nom_categoria;
            ver.subtitle = body.nom_categoria;
            break;
        case "comprobantes_ventas":
            ver.title = body.id_venta;
            ver.subtitle = body.id_venta;
            break;
        case "comprobantes_entradas":
            ver.title = body.id_entrada;
            ver.subtitle = body.id_entrada;
            break;
        case "direcciones_usuarios":
            ver.title = body.id_usuario;
            ver.subtitle = body.id_usuario;
            break;
        case "direcciones_proveedores":
            ver.title = body.id_usuario;
            ver.subtitle = body.id_usuario;
            break;
        case "entradas":
            ver.title = body.id_producto;
            ver.subtitle = body.id_producto;
            break;
        case "producto_almacenes":
            ver.title = body.id_almacen;
            ver.subtitle = body.id_almacen;
            break;
        case "productos":
            ver.title = body.nom_producto;
            ver.subtitle = body.nom_producto;
            break;
        case "proveedores":
            ver.title = body.nom_proveedor;
            ver.subtitle = body.nom_proveedor;
            break;
        case "regiones":
            ver.title = body.nom_region;
            ver.subtitle = body.nom_region;
            break;
        case "sucursales":
            ver.title = body.nom_sucursal;
            ver.subtitle = body.nom_sucursal;
            break;
        case "tipo_pagos":
            ver.title = body.nom_tipo;
            ver.subtitle = body.nom_tipo;
            break;
        case "tipo_usuarios":
            ver.title = body.nom_tipo;
            ver.subtitle = body.nom_tipo;
            break;
        case "tipo_usuarios":
            ver.title = body.nom_usuario;
            ver.subtitle = body.nom_usuario;
            break;
        case "ventas":
            ver.title = body.id_prod_alm;
            ver.subtitle = body.id_prod_alm;
            break;
    }
    return ver;
}

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