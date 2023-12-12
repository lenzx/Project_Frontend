import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostEspecialistaEspecialidad from "../hooks/usePostEspecialistaEspecialidad";

const FormularioEspecialistaEspecialidad = () => {
    const [especialistaId, setEspecialistaId] = useState("");
    const [especialidadId, setEspecialidadId] = useState("");
    const postData = usePostEspecialistaEspecialidad();
    const handleSubmit = async (e) => {
    e.preventDefault();
    postData(especialistaId, especialidadId);
    };
    return (
        <div className="container">
            <h1 className="title">Formulario Especialista especialidad</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEspecialistaId">
                    <Form.Label>Especialista ID</Form.Label>
                    <Form.Control type="text" placeholder="Especialista ID" value={especialistaId} onChange={(e) => setEspecialistaId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEspecialidadId">
                    <Form.Label>Especialidad ID</Form.Label>
                    <Form.Control type="text" placeholder="Especialidad ID" value={especialidadId} onChange={(e) => setEspecialidadId(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
      );
    };
    

export default FormularioEspecialistaEspecialidad ;
