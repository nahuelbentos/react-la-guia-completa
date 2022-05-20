import {Fragment} from 'react';
import {MARCAS, YEARS, PLANES} from '../constants/index';
import useCotizador from '../hooks/useCotizador';
import { Error } from './Error';

export const Formulario = () => {
  const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador();
  const {marca,  year} = datos;

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(datos).includes('')){
      return setError('Todos los campos obligatorios');
    }

    setError('');
    cotizarSeguro();

  }

  
  return (
    <>
    { error && <Error /> }
      <form onSubmit={handleSubmit} >
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select name="marca" className="w-full p-3 bg-white border border-gray-200" onChange={(e) => handleChangeDatos(e)} value={marca} >
            <option value="">--- Selecciona Marca ---</option>
            {MARCAS.map(({id, nombre}) => (
              <option key={id} value={id}>
                {' '}
                {nombre}{' '}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Años</label>
          <select name="year" className="w-full p-3 bg-white border border-gray-200" onChange={(e) => handleChangeDatos(e)} value={year} >
            <option value="">--- Selecciona Año ---</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {' '}
                {year}{' '}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
          <div className="flex gap-3 items-center">
            {PLANES.map(({id, nombre}) => (
              <Fragment key={id}>
                <label>{nombre}</label>
                <input type="radio" name="plan" value={id} onChange={(e) => handleChangeDatos(e)}   />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer uppercase font-bold p-3"
          value="Cotizar"
          
        />
      </form>
    </>
  );
};
