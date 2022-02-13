import {useEffect} from 'react';
import {Paciente} from './Paciente';

export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  useEffect(() => {
    console.log('Nuevo Paciente');
  }, [pacientes]);

  return (
    <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5 my-10 ">
      {pacientes?.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};
