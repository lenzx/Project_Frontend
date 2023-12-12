import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostEspecialistaConvenio from "../hooks/usePostEspecialistaConvenio";

const FormularioEspecialistaConvenio= () => {
    const [especialistaId, setEspecialistaId] = useState("");
    const [convenioId, setConvenioId] = useState("");
    const postData = usePostEspecialistaConvenio();
    const handleSubmit = async (e) => {
    e.preventDefault();
    postData(especialistaId,convenioId);
    };
    return (
        <div className="container">
            <h1 className="title">Formulario Especialista Convenio</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEspecialistaId">
                    <Form.Label>Especialista ID</Form.Label>
                    <Form.Control type="text" placeholder="Especialista ID" value={especialistaId} onChange={(e) => setEspecialistaId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConvenioId">
                    <Form.Label>Convenio ID</Form.Label>
                    <Form.Control type="text" placeholder="Convenio ID" value={convenioId} onChange={(e) => setConvenioId(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
      );
    };
    

export default FormularioEspecialistaConvenio ;
