import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import usePostConvenio from "../hooks/usePostConvenio";
import usePutConvenio from "../hooks/usePutConvenio";
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';
import PropTypes from 'prop-types'

const FormularioConvenio = ({object}) => {
    

    const convenio = object ? object: null;

    const [tipoConvenioOptions, setTipoConvenioOptions] = useState([]);
    const title = convenio ? "Modificar Convenio" : "Añadir Convenio";
    const id = convenio ? convenio.id : null;
    const [nombre, setNombre] = useState(convenio ? convenio.nombre : "");
    const [descripcion, setDescripcion] = useState(convenio ? convenio.descripcion : "");
    const [enlace, setEnlace] = useState(convenio ? convenio.enlace : "");
    const [direccion,setDireccion] = useState(convenio ? convenio.direccion:"")
    const [imagen, setImagen] = useState(convenio ? convenio.imagen : null);
    const [num_telefono, setNum_telefono] = useState(convenio ? convenio.num_telefono : "");
    const [tipo_convenio_id, setTipo_convenio_id] = useState(convenio ? convenio.tipo_convenio_id : "");
    
    const postData = usePostConvenio();
    const putData = usePutConvenio();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/servicio/categoriaConvenio/`)
            .then(response => {
                setTipoConvenioOptions(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los tipos de convenio:', error.response ? error.response.data : error.message);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (convenio) {
                await putData(id, nombre, descripcion, enlace, imagen, num_telefono, tipo_convenio_id, convenio ? convenio.id : null);
            } else {
                await postData(nombre, descripcion, enlace,direccion,  imagen, num_telefono, tipo_convenio_id, convenio ? convenio.id : null);
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
                <Form.Group className="mb-3" controlId="formDireccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" value={direccion} onChange={e => setDireccion(e.target.value)} />
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
                    <Form.Control as="select" value={tipo_convenio_id} onChange={e => setTipo_convenio_id(e.target.value)}>
                        {tipoConvenioOptions.map(option => (
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

FormularioConvenio.propTypes = {
    object: PropTypes.object
};

export default FormularioConvenio;