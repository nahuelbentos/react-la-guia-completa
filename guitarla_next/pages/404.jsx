import Link from 'next/link'
import React from 'react'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
      <div className={styles.no_encontrado}>
        <h1 className='heading'>Pagina no encontrada</h1>
        <Link href="/" > Volver al inicio </Link>
      </div>
  )
}

export default NotFound