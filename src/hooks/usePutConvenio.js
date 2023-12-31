import axios from 'axios';
import {  CONVENIO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';
const usePutConvenio = () => {
    
    const putData = async (id, nombre, descripcion, enlace,direccion, imagen, num_telefono, tipo_convenio_id) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("enlace", enlace);
            data.append("direccion", direccion)
            data.append("imagen", imagen);
            data.append("num_telefono", num_telefono);
            data.append("tipo_convenio_id", tipo_convenio_id);



            // Obtén el token de las cookies
            const token = Cookies.get('jwt');
            console.log(data);
            console.log('ID del convenio:', id);
            const response = await axios.put(`${CONVENIO}${id}/`, data, {
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

export default usePutConvenio;