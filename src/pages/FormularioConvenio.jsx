import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostConvenio from "../hooks/usePostConvenio";

const FormularioConvenio = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [enlace, setEnlace] = useState("")
    const [imagen, setImagen] = useState(null);
    const [num_telefono, setNum_telefono]= useState("")
    const [tipo_convenio_id, setTipo_convenio_id] = useState()

  const postData =  usePostConvenio();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(nombre, descripcion, enlace,imagen,num_telefono,tipo_convenio_id);
  };

  return (
    <div className="container">
      <h1 className="title">React &amp; Cloudinary</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEnlace">
          <Form.Label>Enlace</Form.Label>
          <Form.Control type="text" placeholder="Enlace" value={enlace} onChange={e => setEnlace(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumTelefono">
          <Form.Label>Número de Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Número de Teléfono" value={num_telefono} onChange={e => setNum_telefono(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTipoConvenioId">
          <Form.Label>Tipo de Convenio ID</Form.Label>
          <Form.Control type="text" placeholder="Tipo de Convenio ID" value={tipo_convenio_id} onChange={e => setTipo_convenio_id(e.target.value)} />
        </Form.Group>

        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
};

export default FormularioConvenio;