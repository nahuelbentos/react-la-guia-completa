import {useEffect, useState} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    const totalDisponible = presupuesto - totalGastado;
    setTimeout(() => setPorcentaje((((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)), 1000);
    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);
  const [disponible, setDisponible] = useState(presupuesto);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const formatCantidad = (cantidad = 800) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  const handleReset = () =>{
    const confirmation = confirm('Estas seguro de resetear la app?');
    if(confirmation){
      localStorage.clear();
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false)
    }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#f5f5f5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className='reset-app' onClick={handleReset}> Resetear App</button>
        <p>
          <span>Presupuesto: {formatCantidad(presupuesto)}</span>
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`} >
          <span>Disponible: {formatCantidad(disponible)}</span>
        </p>
        <p>
          <span>Gastado: {formatCantidad(gastado)}</span>
        </p>
      </div>
    </div>
  );
};
