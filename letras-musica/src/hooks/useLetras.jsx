import { useContext } from "react";
import LetrasContext from '../context/LetrasProvider';


const useLetras = () => useContext(LetrasContext);

export default useLetras;