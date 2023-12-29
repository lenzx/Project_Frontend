import axios from 'axios';
import { PRODUCTO  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostProducto = () => {
    
    const postData = async (nombre, descripcion, valor, necesitaReceta, imagen,categoria) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("valor", valor);
            data.append("necesita_receta", necesitaReceta);
            data.append("imagen", imagen);
            categoria.forEach(id => data.append("categoria", id));

                    // Obtén el token de las cookies
            const token = Cookies.get('jwt');

            const response = await axios.post(`${PRODUCTO}`, data, {
                headers: {
                    // Incluye el token en las cabeceras de la solicitud
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
            console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostProducto;