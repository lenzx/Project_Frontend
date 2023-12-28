const API_BASE_URL =
  window.location.hostname === "localhost" // Comprobar si estás en el entorno local
    ? "http://localhost:8000/"
    : "https://api.lenzxdev.cl/"; // URL de producción

const API_VERSION = "api/v1/";

const API_URL = `${API_BASE_URL}${API_VERSION}`;

const API_SERVICIO = `${API_URL}servicio/`;
const API_WEB = `${API_URL}web/`;
const API_PRODCUCTO = `${API_URL}producto/`;
const API_AUTH = `${API_URL}custom_auth/`;

export const CONVENIO = `${API_SERVICIO}convenios/`;
export const SERVICIO = `${API_SERVICIO}servicio/`;
export const ESPECIALIDAD = `${API_SERVICIO}especialidad/`;
export const ESPECIALISTA = `${API_SERVICIO}especialista/`;
export const CONSULTA = `${API_SERVICIO}consulta/`;
export const CATEGORIACONVENIO = `${API_SERVICIO}categoriaConvenio/`;

export const MARKAY = `${API_WEB}markay/`;
export const SECCION = `${API_WEB}seccion/`;
export const REDSOCIAL = `${API_WEB}redSocial/`;

export const PRODUCTO = `${API_PRODCUCTO}producto/`;
export const CATEGORIAPRODUCTO = `${API_PRODCUCTO}categoria/`;

export const LOGIN = `${API_AUTH}token/`;
export const VERIFY = `${API_AUTH}verify/`;
export const LOGOUT = `${API_AUTH}logout/`;

