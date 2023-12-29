import axios from 'axios';
import { CATEGORIAPRODUCTO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const useDeleteCategoriaProductos = () => {
    const deleteData = async (id) => {
        try {
            const confirmDelete = window.confirm('¿Seguro que quieres eliminar esta categoría de productos?');
            if (!confirmDelete) {
                return;
            }

            const token = Cookies.get('jwt');
            const response = await axios.delete(`${CATEGORIAPRODUCTO}${id}/`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }});

            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Datos eliminados con éxito:', response.data);
            window.location.reload(true)
        } catch (error) {
            console.error('Error al eliminar datos:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    return deleteData;
};

export default useDeleteCategoriaProductos;
