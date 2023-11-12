export const API_BASE_URL =
  window.location.hostname === "localhost" // Comprobar si estás en el entorno local
    ? "http://localhost:8000"
    : "http://54.233.113.213"; // URL de producción