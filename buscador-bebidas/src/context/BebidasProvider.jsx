import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

  const obtenerBebidas = async (datos) => {
    const {nombre, categoria} =datos;
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const {data} = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( ()=> {
    
    const obtenerReceta = async () => {
      if(!bebidaId) return;
      setCargando(true);
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
        const {data} = await axios(url);
        setReceta(data.drinks[0])
        
      } catch (error) {
        console.log(error);
        setReceta({});        
      }
      setCargando(false);
    }

    obtenerReceta();

  }, [bebidaId])

  const handleModalClick = () => setModal(!modal);

  const handleBebidaIdClick = (id) => setBebidaId(id);

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        obtenerBebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        cargando
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export {BebidasProvider};

export default BebidasContext;
