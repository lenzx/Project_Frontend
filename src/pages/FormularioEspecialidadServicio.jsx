import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostEspecialidadServicio from "../hooks/usePostEspecialidadServicio";

const FormularioEspecialidadServicio = () => {
    const [servicioId, setServicioId] = useState("");
    const [especialidadId, setEspecialidadId] = useState("");
    const postData = usePostEspecialidadServicio();
    const handleSubmit = async (e) => {
    e.preventDefault();
    postData(servicioId,especialidadId);
    };
    return (
        <div className="container">
            <h1 className="title">Formulario Servicio Especialidad</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formServicioId">
                    <Form.Label>Servicio ID</Form.Label>
                    <Form.Control type="text" placeholder="Servicio ID" value={servicioId} onChange={(e) => setServicioId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEspecialidadId">
                    <Form.Label>Especialidad ID</Form.Label>
                    <Form.Control type="text" placeholder="Especialidad ID" value={especialidadId} onChange={(e) => setEspecialidadId(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Confirmar</button>
            </Form>
        </div>
      );
    };
    

export default FormularioEspecialidadServicio ;
