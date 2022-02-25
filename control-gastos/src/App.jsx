import {Header} from './components/Header';
import {useState, useEffect} from 'react';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import {Modal} from './components/Modal';
import {ListadoGastos} from './components/ListadoGastos';
import {generarId} from './helpers/index';
import {Filtros} from './components/Filtros';

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => setAnimarModal(true), 500);
    }
  }, [gastoEditar]);

  useEffect(() => localStorage.setItem('presupuesto', presupuesto ?? 0), [presupuesto]);
  useEffect(() => localStorage.setItem('gastos', JSON.stringify(gastos) ?? []), [gastos]);

  useEffect(() => Number(localStorage.getItem('presupuesto')) > 0 && setIsValidPresupuesto(true), []);
  useEffect(() => filtro && setGastosFiltrados(gastos.filter((g) => g.categoria === filtro)), [filtro]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => setAnimarModal(true), 500);
  };

  const eliminarGasto = (id) => {
    console.log(id);
    setGastos(gastos.filter((g) => g.id !== id));
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      setGastos(gastos.map((gastoState) => (gastoState.id === gasto.id ? gasto : gastoState)));
    } else {
      (gasto.id = generarId()), (gasto.fecha = Date.now());
      setGastos([...gastos, gasto]);
    }
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
