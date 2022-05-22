
import  { useState } from 'react'
import { useClima } from '../hooks/useClima';

export const Formulario = () => {

  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const [alerta, setAlerta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
      return setAlerta('Todos los datos son obligatorios');
    }
    consultarClima(busqueda);
    

  }
  return (
    <div className='contenedor'>

      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit} >
        <div className='campo'>
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" name="ciudad" id="ciudad" onChange={datosBusqueda} />
        </div>
        <div className='campo'>
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" onChange={datosBusqueda}>
            <option value="">Seleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="UY">Uruguay</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>

    </div>
  )
}
