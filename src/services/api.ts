import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.196:8082/',
});

export {api};
