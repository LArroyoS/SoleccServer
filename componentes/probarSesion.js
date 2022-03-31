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
        if(objeto.email_usuario=="" && objeto.pass_usuario==""){
            setRespuesta({ status: "Los campos estan vacios" })
        }
        else{
            const res = await fetch("/api/sesionSolecc/",
            { 
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(objeto)
            });
            const data = await res.json();
            setRespuesta(data);
        }
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
            <h2>{ JSON.stringify(respuesta) }</h2>
        </div>
    )
}