import {useClima} from '../hooks/useClima';
import {Formulario} from './Formulario';
import {Resultado} from './Resultado';
import { Spinner } from './Spinner';

export const AppClima = () => {
  const {resultado, cargando} = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        { cargando ? <Spinner /> : 
          resultado?.name ? <Resultado /> : 'No hay resultados'
        }
      </main>
    </>
  );
};
