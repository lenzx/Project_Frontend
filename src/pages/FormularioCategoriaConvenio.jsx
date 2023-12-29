import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostCategoriaConvenio from "../hooks/usePostCategoriaConvenio";
import usePutCategoriaConvenio from '../hooks/usePutCategoriaConvenio';
import PropTypes from 'prop-types'

const FormularioCategoriaConvenio = ({object, setSelectedForm}) => {

  const categoriaConvenio = object ? object : null;
  const title = categoriaConvenio ? "Modifique la categoría de sus convenios" : "Añadir una categoría de convenios";
  const id= categoriaConvenio ?  categoriaConvenio.id : null;


  const [nombre, setNombre] = useState(categoriaConvenio ?  categoriaConvenio.nombre: "");
  const postData =  usePostCategoriaConvenio();
  const putData = usePutCategoriaConvenio();

  const handleChanges = () => {
    setSelectedForm('');
  }



    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (categoriaConvenio) {
          await putData(id, nombre);
        } else {
          await postData( nombre);
        } 
        alert('Datos enviados con éxito');
        handleChanges()
  
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
            <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre de la categoría: </Form.Label>
            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Confirmar</button>
        </Form>
        </div>
    );
    };
FormularioCategoriaConvenio.propTypes = {
  object: PropTypes.object
};

export default FormularioCategoriaConvenio ;