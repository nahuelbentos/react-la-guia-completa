import useLetras from '../hooks/useLetras';
import {Formulario} from './Formulario';
import {Alerta} from './Alerta';
import {Letra} from './Letra';

export const AppLetras = () => {
  const {alerta, letra, cargando} = useLetras();
  return (
    <>
      <header> Busqueda de letras de canciones</header>
      <Formulario />
      <main>
        { alerta ? <Alerta>{alerta}</Alerta> : 
          letra ? <Letra /> : 
          cargando ? 'cargando..' : <p className="text-center">Busca letras de tus artistas favoritos </p>}
      </main>
    </>
  );
};
