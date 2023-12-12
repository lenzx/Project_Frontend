import { useState } from "react";
import { Form } from "react-bootstrap";
import usePostRedSocial from "../hooks/usePostRedSocial";

const FormularioRedSocial = () => {
  const [imagen, setImagen] = useState(null);
  const [enlace, setEnlace] = useState("");
  const [texto, setTexto] = useState("");
  const postData = usePostRedSocial();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(imagen, enlace, texto);
  };

  return (
    <div className="container">
      <h1 className="title">React &amp; Cloudinary</h1>
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
          Enviar Red Social
        </button>
      </Form>
    </div>
  );
};

export default FormularioRedSocial;
