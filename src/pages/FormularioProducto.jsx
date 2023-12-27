import PropTypes from 'prop-types';
import  { useState,useEffect } from 'react';
import { Form } from 'react-bootstrap';
import usePostProducto from '../hooks/usePostProducto';
import usePutProducto from '../hooks/usePutProducto';
import axios from 'axios';

import {API_BASE_URL} from '../markay/api/endpoint.js';


const FormularioProducto = ({object}) => {
  

  const producto = object ? object : null;

  const [tipoCategoriaOptions, setTipoCategoriaOptions] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState([]);
  const title = producto ? "Modificar Producto" : "Añadir Producto";
  const id= producto ?  producto.id : null;
  const [nombre, setNombre] = useState(producto ? producto.nombre:"");
  const [descripcion, setDescripcion] = useState(producto ? producto.descripcion : "");
  const [valor, setValor] = useState(producto ? producto.valor : "");
  const [necesitaReceta, setNecesitaReceta] = useState(producto ? producto.necesitaReceta:1);
  const [imagen, setImagen] = useState(producto ? producto.imagen:null);
  

  const postData = usePostProducto();
  const putData = usePutProducto();

  
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/v1/producto/categoria/`)
        .then(response => {
            setTipoCategoriaOptions(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los tipos de categoria:', error.response ? error.response.data : error.message);
        });
}, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (producto) {
          await putData(id, nombre, descripcion,valor,necesitaReceta, imagen, selectedCategoria);
        } else {
          await postData(nombre, descripcion,valor,necesitaReceta, imagen, selectedCategoria);
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción Corta</Form.Label>
          <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="text" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdministrador">
                    <Form.Label>Necesita Receta?</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="necesita receta"
                        checked={necesitaReceta}
                        onChange={(e) => setNecesitaReceta(e.target.checked)}
                    />
                </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
        </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoriaId">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" multiple value={selectedCategoria} onChange={e => setSelectedCategoria(Array.from(e.target.selectedOptions, option => option.value))}>
                        {tipoCategoriaOptions.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.nombre}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

        <button type="submit" className="btn btn-primary">Confirmar</button>
      </Form>
    </div>
  );
};

FormularioProducto.propTypes = {
  object: PropTypes.object.isRequired
};

export default FormularioProducto;