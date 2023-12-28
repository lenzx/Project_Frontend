import  { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostMarkay from '../hooks/usePostMarkay';
import PropTypes from 'prop-types';
import usePutMarkay from '../hooks/usePutMarkay';

const FormularioMarkay = ({object, setSelectedForm}) => {
    
    const markay = object ? object: null;
    const id= markay ?  markay.id : null;
    const title = markay ? "Modificar informarión de Markay" : "Añadir información de markay";
    const [imagen, setImagen] = useState(markay ?  markay.imagen:null);
    const [descripcion, setDescripcion] = useState(markay ?  markay.descripcion:"");

  const postData = usePostMarkay();
  const putData = usePutMarkay();


  const handleChanges = () => {
    setSelectedForm('');
    }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (markay ) {
          await putData(id, imagen, descripcion );
        } else {
          await postData( imagen, descripcion);
        } 
        alert('Datos enviados con éxito');
        handleChanges();
        
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message;
        console.error('Error al enviar datos:', errorMessage);
        alert('Error al enviar datos: ' + errorMessage);
    }
};

    if(id == 1){
        return (
            <div className="container">
            <h1 className="title">{title}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Modifique el eslogan de su empresa: </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Confirmar</button>
            </Form>
            </div>
        );

    }else{
        return (
            <div className="container">
            <h1 className="title">{title}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Seleccione una imagen para la sección (Si no lo requiere, déjela en blanco):</Form.Label>
                    <Form.Control type="file" onChange={(e) => setImagen(e.target.files[0])} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción de la sección: </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Confirmar</button>
            </Form>
            </div>
        );

    }


    
    };

FormularioMarkay.propTypes = {
    object: PropTypes.object
    }

export default FormularioMarkay;