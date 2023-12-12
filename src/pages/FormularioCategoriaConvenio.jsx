import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostCategoriaConvenio from "../hooks/usePostCategoriaConvenio";


const FormularioCategoriaConvenio = () => {
    const [nombre, setNombre] = useState("");
  const postData =  usePostCategoriaConvenio();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(nombre);
  };

    return (
        <div className="container">
        <h1 className="title">React &amp; Cloudinary</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Enviar Consulta</button>
        </Form>
        </div>
    );
    };

export default FormularioCategoriaConvenio ;