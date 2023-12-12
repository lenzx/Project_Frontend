import  { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostSeccion from '../hooks/usePostSeccion';

const FormularioSeccion = () => {
    const [titulo, setTitulo] = useState(null);
    const [descripcion, setDescripcion] = useState("");

  const postData = usePostSeccion();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(titulo, descripcion);
  };

  return (
    <div className="container">
      <h1 className="title">Formulario de Sección</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
};


export default FormularioSeccion;