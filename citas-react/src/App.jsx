import {Header} from './components/Header';
import Formulario from './components/Formulario';
import {ListadoPacientes} from './components/ListadoPacientes';
import { useState, useEffect } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  const eliminarPaciente = (id) => setPacientes(pacientes.filter((p) => p.id !== id));

  useEffect(() => {
    const pacientesStorage = JSON.parse(localStorage.getItem('pacientes'));
    if(pacientesStorage?.length > 0){
      setPacientes(pacientesStorage);
    }    
  }, [])
  

  useEffect(() => localStorage.setItem('pacientes',JSON.stringify(pacientes)), [pacientes])
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  );
}

export default App;
