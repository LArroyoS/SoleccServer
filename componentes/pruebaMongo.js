import React from "react";
import Link from 'next/link'

export default function PruebaMongo() {
  return (
    <div>
      <h1>Mongo</h1>
      <Link href="/api/mongodb">
        <a>Ir a pruebaMongo</a>
      </Link>
      <Link href="/api/notas">
        <a>Obtener notas</a>
      </Link>
      <form method="POST" action="/api/notas">
        <labe>titulo</labe>
        <input type="text" name="titulo"></input>
        <labe>descripcion</labe>
        <input type="text" name="descripcion"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}