import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Formulario(req, res) {
    res.status(200).json({ hola: 'mundo' })
}
