import { useState } from 'react';
import { Form } from 'react-bootstrap';
import usePostProductoCategoria from "../hooks/usePostProductoCategoria";

const FormularioProductoCategoria = () => {
    const [categoriaId, setCategoriaId] = useState("");
    const [productoId, setProductoId] = useState("");
    const postData = usePostProductoCategoria();
    const handleSubmit = async (e) => {
    e.preventDefault();
    postData(categoriaId,productoId);
    };
    return (
        <div className="container">
            <h1 className="title">Formulario Categoria Especialiadad</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCategoriaId">
                    <Form.Label>Categoria ID</Form.Label>
                    <Form.Control type="text" placeholder="Categoria ID" value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProductoId">
                    <Form.Label>Producto ID</Form.Label>
                    <Form.Control type="text" placeholder="Producto ID" value={productoId} onChange={(e) => setProductoId(e.target.value)} />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
      );
    };
    

export default FormularioProductoCategoria ;
