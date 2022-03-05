import React from "react";
import Link from 'next/link'

export default function PruebaMongo() {
  return (
    <div>
      <h1>Mongo</h1>
      <Link href="/api/mongodb">
        <a>Ir a pruebaMongo</a>
      </Link>
    </div>
  )
}