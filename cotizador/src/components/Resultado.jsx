import React, { useCallback, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants/index';

export const Resultado = () => {
  const {resultado, datos} = useCotizador();
  const {marca, plan, year} = datos;
  const yearRef = useRef(year)
  console.log(yearRef);

  
  //useCallback, se ejecuta la funcion cuando cambia alguna propiedad del array de dependencias.
  //En este caso, cuanda cambia la dependencia 'resultado' se dispara la funcion del useCallback 'MARCAS.find'
  const nombreMarca =  useCallback( MARCAS.find(m => m.id === Number(marca))?.nombre, [resultado] ) ;
  const nombrePlan = useCallback(PLANES.find(p => p.id === Number(plan))?.nombre, [resultado]);

  if(resultado === 0) return null;

  return (
  <div className='bg-gray-100 text-center mt-5 p-5 shadow' >
    <h2 className='text-gray-600 font-black text-3xl' > Resumen </h2>
    <p className='my-2'>
      <span className='font-bold' >Marca: </span> {nombreMarca}
    </p>
    <p className='my-2'>
      <span className='font-bold' >Plan: </span> {nombrePlan}
    </p>
    <p className='my-2'>
      <span className='font-bold' >Año del auto: </span> {yearRef.current}
    </p>
    <p className='my-2 text-2xl'>
      <span className='font-bold' >Total cotizacion: </span> {resultado}
    </p>
    </div>
  );
};
