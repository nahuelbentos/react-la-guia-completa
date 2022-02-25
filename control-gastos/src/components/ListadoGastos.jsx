import {Gasto} from './Gasto';

export const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, gastosFiltrados, filtro}) => {
  console.log({filtro, gastos, gastosFiltrados});
  return (
    <div className="listado-gastos contenedor ">
      {filtro ? (
        <>
          <h2> {gastosFiltrados.length > 0 ? 'Gastos' : 'No hay gastos aun'}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto setGastoEditar={setGastoEditar} key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
          ))}
        </>
      ) : (
        <>
          <h2> {gastos.length > 0 ? 'Gastos' : 'No hay gastos aun'}</h2>
          {gastos.map((gasto) => (
            <Gasto setGastoEditar={setGastoEditar} key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
          ))}
        </>
      )}
    </div>
  );
};
