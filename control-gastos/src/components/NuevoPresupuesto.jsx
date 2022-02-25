import {useState} from 'react';
import {Mensaje} from './Mensaje';

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => setPresupuesto(Number(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      return setMensaje('No es un presupuesto valido');
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label> Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error"> {mensaje}</Mensaje>}
      </form>
    </div>
  );
};
