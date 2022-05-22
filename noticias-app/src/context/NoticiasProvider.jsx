import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
    setPagina(1);
    consultarAPI(url);
  }, [categoria]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`;
    consultarAPI(url);
    
  }, [pagina])

  const consultarAPI = async (url) => {
    const {data} = await axios(url);
    setNoticias(data.articles);
    setTotalNoticias(data.totalResults)
  };
  

  const handleChangeCategoria = (e) => setCategoria(e.target.value);
  const handleChangePagina = (e, valorActual) => setPagina(valorActual);

  return (
    <NoticiasContext.Provider
      value={{
        handleChangeCategoria,
        categoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export {NoticiasProvider};

export default NoticiasContext;
