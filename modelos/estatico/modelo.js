const modelo = {
    almacenes: {
      nom_almacen: "",
      id_usuario: "",
    },
    categorias: {
      nom_categoria: "",
      des_categoria: "",
    },
    comprobantes_ventas: {
      id_venta: "",
      img_comprobante: "",
      tipo_comprobante: "",
    },
    comprobantes_entradas: {
      id_entrada: "",
      img_comprobante: "",
      tipo_comprobante: "",
    },
    direcciones_usuarios: {
      id_usuario: "",
      pais: "",
      estado: "",
      domicilio: "",
      referencia: "",
    },
    direcciones_proveedores: {
      id_proveedor: "",
      pais: "",
      estado: "",
      domicilio: "",
      referencia: "",
    },
    entradas: {
      id_proveedor: "",
      id_producto: "",
      id_usuario: "",
      precio_compra: "",
      cantidad: "",
      total: "",
      status_pago: "",
      id_tipo_pago: "",
      fecha_compra: "",
      fecha_pago: "",
    },
    producto_almacenes: {
      id_almacen: "",
      id_producto: "",
      precio_compra: "",
      precio_venta: "",
      stok_deseado: "",
      stock_real: "",
    },
    productos: {
      id_categoria: "",
      id_proveedor: "",
      nom_producto: "",
      descripcion_c: "",
      descripcion_l: "",
      prec_compra: "",
      detalle: "",
    },
    proveedores: {
      nom_proveedor: "",
      rfc_proveedor: "",
      dir_proveedor: "",
      tel_proveedor: "",
      email_proveedor: "",
    },
    regiones: {
      nom_region: "",
      desc_region: "",
    },
    sucursales: {
      nom_sucursal: "",
      estado: "",
      municipio: "",
      id_region: "",
    },
    tipo_pagos: {
      nom_tipo: "",
    },
    tipo_usuarios: {
      nom_tipo: "",
    },
    usuarios: {
      nom_usuario: "",
      email_usuario: "",
      tel_usuario: "",
      pass_usuario: "",
      id_tipo_usuario: "",
      id_sucursal: "",
      id_direccion: "",
    },
    ventas: {
      id_prod_alm: "",
      precio_compra: "",
      precio_venta: "",
      cantidad: "",
      total: "",
      status_pago: "",
      id_tipo_pago: "",
      fecha_compra: "",
      fecha_pago: "",
    }
  };
  
  export default modelo;
  