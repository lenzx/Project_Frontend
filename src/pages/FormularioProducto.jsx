import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostServicio from "../hooks/usePostServicio";
import usePostProducto from '../hooks/usePostProducto';

const FormularioProducto = () => {
    const [nombre, setNombre] = useState("");
    const [descripcionCorta, setDescripcionCorta] = useState("");
    const [descripcionLarga, setDescripcionLarga] = useState("");
    const [valor, setValor] = useState(0);
    const [necesitaReceta, setNecesitaReceta] = useState(1);
    const [imagen, setImagen] = useState(null);

  const postData = usePostProducto();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(nombre, descripcionCorta, descripcionLarga,valor,necesitaReceta, imagen);
  };

  return (
    <div className="container">
      <h1 className="title">Añadir producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción Corta</Form.Label>
          <Form.Control type="text" placeholder="Descripción" value={descripcionCorta} onChange={e => setDescripcionCorta(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción Larga</Form.Label>
          <Form.Control type="text" placeholder="Descripción" value={descripcionLarga} onChange={e => setDescripcionLarga(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="text" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>necesitaReceta</Form.Label>
          <Form.Control type="text" placeholder="0 - 1" value={necesitaReceta} onChange={e => setNecesitaReceta(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
        </Form.Group>
        

        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
};

export default FormularioProducto;