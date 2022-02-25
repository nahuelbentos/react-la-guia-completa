import React from 'react';
import {ControlPresupuesto} from './ControlPresupuesto';
import {NuevoPresupuesto} from './NuevoPresupuesto';

export const Header = ({gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setPresupuesto={setPresupuesto}
          setGastos={setGastos}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
      )}
    </header>
  );
};
