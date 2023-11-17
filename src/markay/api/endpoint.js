export const API_BASE_URL =
  window.location.hostname === "localhost" // Comprobar si estás en el entorno local
    ? "http://localhost:8000"
    : "http://18.228.46.92"; // URL de producción