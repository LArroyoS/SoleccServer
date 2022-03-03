import React, { useState, useEffect } from "react";
import ConstruirFormulario from "./crearFormulario";
import * as formularios from "../modelos/estaticos/forms";
import * as modelo from "../modelos/estaticos/modelos";

const Agregar = ({ tabla }) => {
  const [formulario, setFormulario] = useState([]);
  const [objeto, setObjeto] = useState({});

  const onChangeValue = (nombre, value) => {
    setObjeto({ ...objeto, [nombre]: value });
  };

  const onChangeValueSelect = (nombre, value) => {
    setObjeto({ ...objeto, [nombre]: JSON.parse(value) });
  };

  const guardar = () => {
    let valido = true;
    for (let x in objeto) {
      if (objeto[x] == "") {
        alert(x + " : " + objeto[x]);
        valido = false;
      }
    }
    if (valido) {
      alert("Guardado");
    } else {
      alert("tienes campos vacios");
    }
  };

  useEffect(() => {
    setFormulario(formularios.formularios[tabla]);
    setObjeto(modelo.modelo[tabla]);
  }, [tabla]);

  return (
    <div>
      {tabla !== "" ? (
        <div>
          <ConstruirFormulario
            formulario={formulario}
            state={objeto}
            onChangeValue={onChangeValue}
            onChangeValueSelect={onChangeValueSelect}
          />
          <br />
          <button onClick={guardar}> Guardar </button>
        </div>
      ) : (
        <p>Selecicone una tabla</p>
      )}
    </div>
  );
};

export default Agregar;