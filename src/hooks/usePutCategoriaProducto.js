import axios from 'axios';
import {  CATEGORIAPRODUCTO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';
const usePutCategoriaProducto = () => {
    
    const putData = async (id,nombre) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);

             // Obtén el token de las cookies
            const token = Cookies.get('jwt');

            const response = await axios.put(`${CATEGORIAPRODUCTO }${id}/`, data, {
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

export default usePutCategoriaProducto;