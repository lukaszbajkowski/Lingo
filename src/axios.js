import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001/api/' // Używaj ścieżki względnej lub bezwzględnej
});

export default instance;
