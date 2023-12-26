/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostEspecialista = () => {
    const [nombre, setNombre] = useState("");
    const [rut, setRut] = useState("");
    const [num_telefono, setNum_telefono] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [horarios, setHorarios] = useState("")
    
    const [imagen, setImagen] = useState(null);
    
    
    
    const postData = async (nombre,rut, num_telefono, descripcion,horarios,imagen) => {
        try {
        const data = new FormData();
        
        data.append("nombre", nombre);
        data.append("rut", rut);
        data.append("num_telefono", num_telefono);
        data.append("descripcion", descripcion);
        data.append("horarios", horarios);
        
        data.append("imagen", imagen);

        const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/especialista/`, data);
        console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostEspecialista;
