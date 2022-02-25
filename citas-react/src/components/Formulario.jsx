import {useState, useEffect} from 'react';

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState('Hook');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  useEffect(() => {
    console.log('el componente esta listo');
  }, []);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, nombrePropietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio');
      setError(true);
      return;
    }
    setError(false);
    const newPaciente = {nombre, nombrePropietario, email, fecha, sintomas,};

    if(paciente.id){
      newPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( p => p.id === newPaciente.id ? newPaciente : p);
      setPacientes(pacientesActualizados);
      setPaciente({})

    }else {
      newPaciente.id = generarId();
      setPacientes([...pacientes, newPaciente]);
    }
    setNombre('');
    setNombrePropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade paciente y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <Error>
            {' '}
            <p>Todos los campos son obligatorios</p>{' '}
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre de propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
