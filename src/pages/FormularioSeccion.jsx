import  { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostSeccion from '../hooks/usePostSeccion';
import usePutSeccion from '../hooks/usePutSeccion';
import PropTypes from 'prop-types';
const FormularioSeccion = ({object}) => {
    const seccion = object ? object : null;
    const id= seccion ?  seccion.id : null;
    const title = seccion ? "Modificar sección" : "Añadir seccion";
    const [titulo, setTitulo] = useState(seccion ?  seccion.titulo: null);
    const [descripcion, setDescripcion] = useState(seccion ?  seccion.descripcion:"");

  const postData = usePostSeccion();
  const putData = usePutSeccion();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (seccion) {
          await putData(id,titulo, descripcion );
        } else {
          await postData( titulo, descripcion);
        } 
        alert('Datos enviados con éxito');
        
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message;
        console.error('Error al enviar datos:', errorMessage);
        alert('Error al enviar datos: ' + errorMessage);
    }
};

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Confirmar</button>
      </Form>
    </div>
  );
};

FormularioSeccion.propTypes = {
  object : PropTypes.object
};
export default FormularioSeccion;