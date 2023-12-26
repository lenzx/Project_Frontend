import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostServicio from "../hooks/usePostServicio";
import usePutServicio from '../hooks/usePutServicio';
import { useLocation, useNavigate } from 'react-router-dom';



const FormularioServicios = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const servicio = location.state ? location.state.servicio : null;
  const id= servicio ?  servicio.id : null;
  const title = servicio ? "Modificar servicio" : "Añadir servicio";
  const [nombre, setNombre] = useState(servicio ?  servicio.nombre:"");
  const [descripcion, setDescripcion] = useState(servicio ?  servicio.descripcion:"");
  const [imagen, setImagen] = useState(servicio ?  servicio.imagen:null);
  const postData = usePostServicio();
  const putData = usePutServicio();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (servicio) {
          await putData(id, nombre,descripcion,imagen);
        } else {
          await postData( nombre,descripcion,imagen);
        } 
        alert('Datos enviados con éxito');
        navigate(-1);
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
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
        </Form.Group>
        

        <button type="submit" className="btn btn-primary">Confirmar</button>
      </Form>
    </div>
  );
};

export default FormularioServicios;