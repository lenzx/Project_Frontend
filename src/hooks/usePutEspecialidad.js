import axios from 'axios';
import {  ESPECIALIDAD } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePutEspecialidad = () => {
    
    const putData = async (id, nombre, descripcion, imagen, servicios_id) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("imagen", imagen);
            servicios_id.forEach(id => data.append("servicios", id));
    

             // Obtén el token de las cookies
             const token = Cookies.get('jwt');

             const response = await axios.put(`${ESPECIALIDAD}${id}/`, data, {
                 headers: {
                     // Incluye el token en las cabeceras de la solicitud
                     'Authorization': `Bearer ${token}`
                 }
             });

           
            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Datos actualizados con éxito:', response.data);
        } catch (error) {
            console.error('Error al actualizar datos:', error.response ? error.response.data : error.message);
            throw error; 
        }
    };
    return putData;
};

export default usePutEspecialidad;

