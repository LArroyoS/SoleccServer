import React, { useState } from "react";
import ConstruirFormulario from "./crearFormulario";

export default function ProbarSesion() {
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
    
    const [ respuesta, setRespuesta ] = useState(undefined);
    const [ objeto, setObjeto ] = useState({
        email_usuario: "",
        pass_usuario: ""
    });

    const onChangeValue = (nombre, value) => {
        setObjeto({ ...objeto, [nombre]: value });
    };
    const click = async() => {
        const res = await fetch("/api/solecc/usuarios/",
        { 
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        setRespuesta(data);
    }

    return (
        <div>
            <p>{ JSON.stringify(objeto) }</p>
            <ConstruirFormulario
                formulario={form}
                state={objeto}
                onChangeValue={onChangeValue}
            />
            <br/>
            <button onClick={click}> Guardar </button>
            <h2>{ respuesta }</h2>
        </div>
    )
}