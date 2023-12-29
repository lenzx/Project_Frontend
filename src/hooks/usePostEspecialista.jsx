/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ESPECIALISTA  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostEspecialista = () => {
    
    

    const postData = async (nombre,rut, num_telefono, descripcion,horarios,imagen, convenios, especialidad) => {
        try {
        const data = new FormData();
        
        data.append("nombre", nombre);
        data.append("rut", rut);
        data.append("num_telefono", num_telefono);
        data.append("descripcion", descripcion);
        data.append("horarios", horarios);
        
        data.append("imagen", imagen);
        convenios.forEach(id => data.append("convenio", id));
        especialidad.forEach(id => data.append("especialidad", id));

        // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${ESPECIALISTA}`, data, {
        headers: {
            // Incluye el token en las cabeceras de la solicitud
            'Authorization': `Bearer ${token}`
        }
    });
        console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostEspecialista;
