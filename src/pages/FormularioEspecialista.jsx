import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import usePostEspecialista from "../hooks/usePostEspecialista";
import usePutEspecialista from "../hooks/usePutEspecialista";
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const FormularioEspecialista = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const especialista = location.state ? location.state.especialista : null;

    const [convenioOptions, setConvenioOptions] = useState([]);
    const [especialidadOptions, setEspecialidadOptions] = useState([]); 

    const [selectedConvenios, setSelectedConvenios] = useState([]);
    const [selectedEspecialidades, setSelectedEspecialidades] = useState([]);

    const title = especialista ? "Modificar Especialista" : "Añadir Especialista";

    const id = especialista ? especialista.id : null;
    const [nombre, setNombre] = useState(especialista ? especialista.nombre : "");
    const [rut, setRut] = useState(especialista ? especialista.rut : "");
    const [num_telefono, setNum_telefono] = useState(especialista ? especialista.num_telefono : "");
    const [descripcion, setDescripcion] = useState(especialista ? especialista.descripcion : "");
    const [horarios, setHorarios] = useState(especialista ? especialista.horarios : "");
    const [imagen, setImagen] = useState(especialista ? especialista.imagen : null);

    const postData = usePostEspecialista();
    const putData = usePutEspecialista();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/servicio/especialidad/`)
            .then(response => {
                setEspecialidadOptions(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las especialidades:', error.response ? error.response.data : error.message);
            });
    }, []);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/servicio/convenios/`)
            .then(response => {
                setConvenioOptions(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los convenios:', error.response ? error.response.data : error.message);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (especialista) {
                await putData(id, nombre, rut, num_telefono, descripcion, horarios,  imagen, selectedConvenios, selectedEspecialidades);
            } else {
                await postData(nombre, rut, num_telefono, descripcion, horarios,  imagen, selectedConvenios, selectedEspecialidades);
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
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRut">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="text" placeholder="RUT" value={rut} onChange={e => setRut(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumTelefono">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Número de Teléfono" value={num_telefono} onChange={e => setNum_telefono(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorarios">
                    <Form.Label>Horarios</Form.Label>
                    <Form.Control type="text" placeholder="Horarios" value={horarios} onChange={e => setHorarios(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={e => setImagen(e.target.files[0])} />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="formConvenioId">
                    <Form.Label>Convenio</Form.Label>
                    <Form.Control as="select" multiple value={selectedConvenios} onChange={e => setSelectedConvenios(Array.from(e.target.selectedOptions, option => option.value))}>
                        {convenioOptions.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.nombre}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEspecialidadId">
                    <Form.Label>Especialidad</Form.Label>
                    <Form.Control as="select" multiple value={selectedEspecialidades} onChange={e => setSelectedEspecialidades(Array.from(e.target.selectedOptions, option => option.value))}>
                        {especialidadOptions.map(option => (
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

export default FormularioEspecialista;