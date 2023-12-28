import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostCategoriaProductos from "../hooks/usePostCategoriaProductos";
import usePutCategoriaProducto from '../hooks/usePutCategoriaProducto';


const FormularioCategoriaProductos = ({object}) => {



    const categoriaProducto = object ? object : null;
    const title = categoriaProducto ? "Modificar Categoría" : "Añadir Categoría";
    const id= categoriaProducto ?  categoriaProducto.id : null;
    const [nombre, setNombre] = useState(categoriaProducto ? categoriaProducto.nombre: "");
    const postData =  usePostCategoriaProductos();
    const putData = usePutCategoriaProducto();
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (categoriaProducto) {
          await putData(id, nombre);
        } else {
          await postData( nombre);
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
            <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre de la categoría: </Form.Label>
            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Confirmar</button>
        </Form>
        </div>
    );
    };
FormularioCategoriaProductos.propTypes = {
    object: PropTypes.object
};

export default FormularioCategoriaProductos ;