import React from "react";

//const peticion = require('../controladores/peticiones.servidor');
import * as peticion from "./ListasPruebas";
import * as modelo from "./modelos";

const ConstruirFormulario = ({
  formulario,
  state,
  onChangeValue,
  onChangeValueSelect
}) => {
  const selectItems = (tabla) => {
    const obtenerLista = peticion.datos(tabla, modelo.modelo[tabla], 4);
    return obtenerLista.map((item) => {
      return (
        <option value={JSON.stringify(item)}> {item.toString.title} </option>
      );
    });
  };

  return (
    formulario != null &&
    formulario.map((item) => {
      switch (item.type) {
        case "text":
          return (
            <div>
              <p> {item.titulo} </p>
              <input
                type="text"
                name={item.nombre}
                value={state[item.nombre]}
                onChange={(text) =>
                  onChangeValue(item.nombre, text.target.value)
                }
              />
            </div>
          );
          break;
        case "area":
          return (
            <div>
              <p> {item.titulo} </p>
              <textarea
                onChange={(change) =>
                  onChangeValue(item.nombre, change.target.value)
                }
              >
                {state[item.nombre]}
              </textarea>
            </div>
          );
          break;
        case "file":
          return (
            <div>
              <p> {item.titulo} </p>
              <input
                type="file"
                onChange={(file) =>
                  onChangeValue(item.nombre, file.target.files[0])
                }
              />
            </div>
          );
          break;
        case "picker":
          return (
            <div>
              <p> {item.titulo} </p>
              <select
                onChange={(change) =>
                  onChangeValueSelect(item.nombre, change.target.value)
                }
              >
                <option value=""> {"--- " + item.nombre + " ---"} </option>
                {selectItems(item.tabla, 4)}
              </select>
            </div>
          );
          break;
      }
    })
  );
};

export default ConstruirFormulario;