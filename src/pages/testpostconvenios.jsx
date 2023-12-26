import { Form } from "react-bootstrap";
import { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import { API_BASE_URL } from "../markay/api/endpoint";
import axios from 'axios';

const TestPostConvenios = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);
    const [link, setLink] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("nombre", nombre);
        data.append("descripcion", descripcion);
        data.append("imagen", imagen);
        data.append("link", link);

        axios.post(`${API_BASE_URL}/api/v1/convenios/`, data).then(
            (response) => {
                console.log(response.status, response.data.token);
            }
        )
    }

    

    return (
        <div className="container">
            <h1 className="title">React &amp; Cloudinary</h1>
            <div className="container">
                <UploadWidget />
            </div>
            <div className="container">
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
                        <Form.Control type="text" placeholder="Imagen" value={imagen} onChange={e => setImagen(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Link" value={link} onChange={e => setLink(e.target.value)} />
                    </Form.Group>
        
                    <button type="submit" className="btn btn-primary">Confirmar</button>
                </Form>
            </div>
        </div>
    )
}

export default TestPostConvenios;