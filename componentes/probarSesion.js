import React, { useState } from "react";
import ConstruirFormulario from "./crearFormulario";

const form = [
    {
        "type":"text",
        "titulo":"Correo",
        "nombre":"email_usuario",
        "icon":"puzzle-piece"
    },
    {
        "type":"text",
        "titulo":"Contraseña",
        "nombre":"pass_usuario",
        "icon":"puzzle-piece"
    },
];

export default function ProbarSesion() {
    const [ objeto, setObjeto ] = useState({
        email_usuario: "",
        pass_usuario: ""
    });
    const [ respuesta, setRespuesta ] = useState(undefined);

    const onChangeValue = (nombre, value) => {
        setObjeto({ ...objeto, [nombre]: value });
    };
    const onChangeValueSelect = (nombre, value) => {
        setObjeto({ ...objeto, [nombre]: value });
    };
    const click = async() => {
        alert("click");
    }

    return (
        <div>
            <p>{ JSON.stringify(objeto) }</p>
            <ConstruirFormulario
                formulario={form}
                state={objeto}
                onChangeValue={onChangeValue}
                onChangeValueSelect={onChangeValueSelect}
            />
            <button type="button" onClick={() => click()}> Guardar </button>
            <h2>{ respuesta }</h2>
        </div>
    )
}