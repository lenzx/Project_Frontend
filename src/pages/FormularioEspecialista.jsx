import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostEspecialista from "../hooks/usePostEspecialista";

const FormularioEspecialista = () => {
    const [nombre, setNombre] = useState("");
    const [rut, setRut] = useState("");
    const [num_telefono, setNum_telefono] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horarios, setHorarios] = useState("");
    const [administrador, setAdministrador] = useState("");
    const [imagen, setImagen] = useState(null);

    const postData = usePostEspecialista();

    const handleSubmit = async (e) => {
    e.preventDefault();

    postData(nombre, rut, num_telefono, descripcion, horarios, administrador, imagen);
    };

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRut">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="text" placeholder="RUT" value={rut} onChange={(e) => setRut(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumTelefono">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Número de Teléfono" value={num_telefono} onChange={(e) => setNum_telefono(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorarios">
                    <Form.Label>Horarios</Form.Label>
                    <Form.Control type="text" placeholder="Horarios" value={horarios} onChange={(e) => setHorarios(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAdministrador">
                    <Form.Label>Administrador</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Administrador"
                        checked={administrador}
                        onChange={(e) => setAdministrador(e.target.checked)}
                    />
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

export default FormularioEspecialista;
