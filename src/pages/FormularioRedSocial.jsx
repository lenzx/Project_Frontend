import { useState} from "react";
import { Form } from "react-bootstrap";
import usePostRedSocial from "../hooks/usePostRedSocial";
import usePutRedSocial from '../hooks/usePutRedSocial';
import PropTypes from 'prop-types';




const FormularioRedSocial = ({object, setSelectedForm}) => {
  
  const redSocial = object ? object : null;
  const id= redSocial ?  redSocial.id : null;
  const title = redSocial ? "Modificar redSocial" : "Añadir redSocial";
  const [imagen, setImagen] = useState(redSocial ?redSocial.imagen:null);
  const [enlace, setEnlace] = useState(redSocial ? redSocial.enlace:"");
  const [texto, setTexto] = useState((redSocial ? redSocial.texto:""));
  const postData = usePostRedSocial();
  const putData = usePutRedSocial();


  const handleChanges = () => {
    setSelectedForm('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (redSocial) {
          await putData(id, imagen,enlace,texto);
        } else {
          await postData( imagen,enlace,texto);
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre con que se verá en el sitio:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Enlace</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={enlace}
            onChange={(e) => setEnlace(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
        Confirmar
        </button>
      </Form>
    </div>
  );
};

FormularioRedSocial.propTypes = {
  object : PropTypes.object
};
export default FormularioRedSocial;
