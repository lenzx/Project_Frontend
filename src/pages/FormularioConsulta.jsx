import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import usePostConsulta from "../hooks/usePostConsulta";

const FormularioConsulta = () => {
  const { id: especialistaId } = useParams();
  const [nombre, setNombre] = useState("");
  const [correo_electronico, setCorreo_electronico] = useState("");
  const [num_telefono, setNum_telefono] = useState("");
  const [motivo_consulta, setMotivo_consulta] = useState("");
  const postData = usePostConsulta();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Especialista ID:', especialistaId);
    
    postData(nombre, correo_electronico, num_telefono, motivo_consulta, especialistaId);
    
  };

  return (
    <div className="container">
      <h1 className="title">Formulario de consulta</h1>
      <h2 className="title">Todos los datos entregados son confidenciales y serán revisados solo por los especialistas</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Ingrese su nombre completo: </Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="subject" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCorreoElectronico">
          <Form.Label>Correo electrónico de contacto: </Form.Label>
          <Form.Control type="text" placeholder="Correo Electrónico" value={correo_electronico} onChange={e => setCorreo_electronico(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumTelefono">
          <Form.Label>Número de contacto: </Form.Label>
          <Form.Control type="text" placeholder="Número de Teléfono" value={num_telefono} onChange={e => setNum_telefono(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMotivoConsulta">
          <Form.Label>Motivo de su consulta: </Form.Label>
          <Form.Control as="textarea" rows={3} name="message" placeholder="Motivo de la Consulta" value={motivo_consulta} onChange={e => setMotivo_consulta(e.target.value)} />
        </Form.Group>

        <button type="submit" className="btn btn-primary">Enviar Consulta</button>
      </Form>
    </div>
  );
};

export default FormularioConsulta;
