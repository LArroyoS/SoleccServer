const modelo = {
    almacenes: {
      nom_almacen: "",
      id_usuario: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    categorias: {
      nom_categoria: "",
      des_categoria: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    comprobantes_ventas: {
      id_venta: "",
      img_comprobante: "",
      tipo_comprobante: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    comprobantes_entradas: {
      id_entrada: "",
      img_comprobante: "",
      tipo_comprobante: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    direcciones_usuarios: {
      id_usuario: "",
      pais: "",
      estado: "",
      domicilio: "",
      referencia: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    direcciones_proveedores: {
      id_usuario: "",
      pais: "",
      estado: "",
      domicilio: "",
      referencia: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
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
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    producto_almacenes: {
      id_almacen: "",
      id_producto: "",
      precio_compra: "",
      precio_venta: "",
      stok_deseado: "",
      stock_real: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    productos: {
      id_categoria: "",
      id_proveedor: "",
      nom_producto: "",
      descripcion_c: "",
      descripcion_l: "",
      prec_compra: "",
      detalle: "",
      qr_producto: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    proveedores: {
      nom_proveedor: "",
      rfc_proveedor: "",
      dir_proveedor: "",
      tel_proveedor: "",
      email_proveedor: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    regiones: {
      nom_region: "",
      desc_region: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    sucursales: {
      nom_sucursal: "",
      estado: "",
      municipio: "",
      id_region: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    tipo_pagos: {
      nom_tipo: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    tipo_usuarios: {
      nom_tipo: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    },
    usuarios: {
      nom_usuario: "",
      email_usuario: "",
      tel_usuario: "",
      pass_usuario: "",
      id_tipo_usuario: "",
      id_sucursal: "",
      id_direccion: "",
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
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
      activo: "",
      toString: {
        title: "",
        subtitle: ""
      }
    }
  };
  
  export default modelo;
  