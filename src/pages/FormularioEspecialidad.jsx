import  PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import usePostEspecialidad from "../hooks/usePostEspecialidad";
import usePutEspecialidad from "../hooks/usePutEspecialidad";
import axios from 'axios';
import {SERVICIO} from '../markay/api/endpoint.js';

const FormularioEspecialidad = ({object}) => {
    
    
    
    const especialidad = object ? object : null;

    const [servicioOptions, setServicioOptions] = useState([]);
    const [selectedServicio, setSelectedServicio] = useState([]);

    const title = especialidad ? "Modificar Especialidad" : "Añadir Especialidad";

    const id = especialidad ? especialidad.id : null;
    const [nombre, setNombre] = useState(especialidad ? especialidad.nombre : "");
    const [descripcion, setDescripcion] = useState(especialidad ? especialidad.descripcion : "");
    const [imagen, setImagen] = useState(especialidad ? especialidad.imagen : null);

    useEffect(() => {
        axios.get(`${SERVICIO}`)
            .then(response => {
                setServicioOptions(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los servicios:', error.response ? error.response.data : error.message);
            });
    }, []);

    const postData = usePostEspecialidad();
    const putData = usePutEspecialidad();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (especialidad) {
                await putData(id, nombre,  descripcion,  imagen,  selectedServicio);
            } else {
                await postData(nombre, descripcion, imagen,  selectedServicio);
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
                    <Form.Label>Nombre de la especialidad: </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción; </Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen representativa: </Form.Label>
                    <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formServicioId">
                    <Form.Label>Servicios ofrecidos por esta especialidad: </Form.Label>
                    <Form.Control as="select" multiple value={selectedServicio} onChange={e => setSelectedServicio(Array.from(e.target.selectedOptions, option => option.value))}>
                        {servicioOptions.map(option => (
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

FormularioEspecialidad.propTypes = {
    object: PropTypes.object
}
export default FormularioEspecialidad;