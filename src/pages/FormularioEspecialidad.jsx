import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostEspecialidad from "../hooks/usePostEspecialidad";

const FormularioEspecialidad = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState(null);

    const postData = usePostEspecialidad();

    const handleSubmit = async (e) => {
    e.preventDefault();

    postData(nombre, descripcion, imagen);
    };

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={(e) => setImagen(e.target.files[0])} />
                </Form.Group>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    );
};

export default FormularioEspecialidad ;
