import Notas from "./notas";
import Almacenes from "./solecc/almacen";
import modeloCategoria from "./solecc/categorias";
import modeloComprobanteEntrada from "./solecc/comprobantes_entradas";
import modeloComprobanteVenta from "./solecc/comprobantes_ventas";
import modeloDireccionProveedor from "./solecc/direcciones_proveedor";
import modeloDireccionUsuario from "./solecc/direcciones_usuarios";
import modeloEntrada from "./solecc/entradas";
import modeloProductoAlmacen from "./solecc/producto_almacen";
import modeloProducto from "./solecc/productos";
import modeloProveedor from "./solecc/proveedores";
import modeloRegion from "./solecc/regiones";
import modeloSucursal from "./solecc/sucursales";
import modeloPago from "./solecc/tipo_pago";
import modeloTipoUsuario from "./solecc/tipo_usuarios";
import modeloUsuario from "./solecc/usuarios";
import modeloVenta from "./solecc/ventas";

const Objeto = function(tabla){
    switch (tabla) {
        case "almacenes":
            return Almacenes;
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
        case "usuarios":
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

const ToString = function(tabla,body){
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
        case "usuarios":
            ver.title = body.nom_usuario;
            ver.subtitle = body.nom_usuario;
            break;
        case "ventas":
            ver.title = body.id_prod_alm;
            ver.subtitle = body.id_prod_alm;
            break;
        default:
            ver = null;
            break;
    }
    return ver;
}

const ObtenerModelo = {
    Objeto: Objeto,
    ToString: ToString
}

export default ObtenerModelo;