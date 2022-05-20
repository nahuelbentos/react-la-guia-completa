import {useContext} from 'react';
import CotizadorContext from '../context/CotizadorProvider';

const useCotizador = () => useContext(CotizadorContext);

export default useCotizador;
