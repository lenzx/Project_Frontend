import  { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostMarkay from '../hooks/usePostMarkay';

const FormularioMarkay = () => {
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescripcion] = useState("");

  const postData = usePostMarkay();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(imagen, descripcion);
  };

    return (
        <div className="container">
        <h1 className="title">Formulario de Markay</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={(e) => setImagen(e.target.files[0])} />
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

export default FormularioMarkay;