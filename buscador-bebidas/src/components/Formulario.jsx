import {useState} from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {useCategorias} from '../hooks/useCategorias';
import { useBebidas } from '../hooks/useBebidas';

export const Formulario = () => {
  const {categorias} = useCategorias();
  const {obtenerBebidas} = useBebidas();

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const [alerta, setAlerta] = useState('')

  const handleInputChange = (e) => setBusqueda({...busqueda, [e.target.name]: e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
      return setAlerta('Todos los campos son obligatorios.') ;
    }

    setAlerta('');
    obtenerBebidas(busqueda);
  }

  return (
    <Form onSubmit={handleSubmit} >
      {alerta && <Alert variant='danger' className='text-center' >{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Fernet"
              name="nombre"
              id="nombre"
              value={busqueda.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select id="categoria" name="categoria" value={busqueda.categoria} onChange={handleInputChange}>
              <option>-Selecciona Categoria -</option>
              {categorias.map(({strCategory}) => (
                <option key={strCategory} value={strCategory}>
                  {strCategory}{' '}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100" type='submit'>
            {' '}
            Buscar Bebidas{' '}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
