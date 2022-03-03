const datos = (tabla, modelo, num) => {
const datos = [];
for (var i = 0; i < num; i++) {
    let crear = lleno(modelo, tabla + i);
    datos.push(crear);
}
return datos;
};

exports.datos = datos;

const lleno = (modelo, nombre) => {
let aux = { ...modelo };
for (let x in aux) {
    aux[x] = x;
}
aux["toString"] = {
    title: "title " + nombre,
    subtitle: "subtitle " + nombre
};
return aux;
};

exports.lleno = lleno;