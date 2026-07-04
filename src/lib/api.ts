import axios from "axios";

export const client = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const clientN8N = axios.create({ baseURL: import.meta.env.VITE_BASE_URL_N8N });
