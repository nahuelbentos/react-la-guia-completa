
import React from 'react'
import useLetras from '../hooks/useLetras';

export const Letra = () => {
  const {letra, cargando} = useLetras()
  return (
    cargando ? 'Cargando...' :  <div className='letra' >{letra}</div>
  )
}
