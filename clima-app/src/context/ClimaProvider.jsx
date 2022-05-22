import axios from 'axios';
import {createContext, useState} from 'react';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {
  const [cargando, setCargando] = useState(false)

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [resultado, setResultado] = useState({})

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  }

  const consultarClima = async datos => {
    setCargando(true);
    try {
      const {ciudad, pais} = datos;
      const appId = import.meta.env.VITE_API_KEY
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
      const {data} = await axios(url);
      console.log(data);
      const {lat,lon} = data[0];
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const {data:dataClima} = await axios(urlClima);
      setResultado(dataClima);
    } catch (error) {
      console.log(error);
      setResultado(null);
    }
    setCargando(false);
  }

  return <ClimaContext.Provider value={{
    busqueda,
    datosBusqueda,
    consultarClima,
    resultado,
    cargando
  }}>{children}</ClimaContext.Provider>;
};

export {ClimaProvider};

export default ClimaContext;
