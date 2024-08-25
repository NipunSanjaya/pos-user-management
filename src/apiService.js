import axios from 'axios';

const API_BASE_URL = 'https://1c8a435077eb4b6bb0e7a23ae2ee12b1.weavy.io'; 
const API_KEY = 'wys_GmNLKs1Q8039G6R6wrWiw43O4vHPYc2G0c5e';  

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
});

export const createUser = (userData) => api.post('/users', userData);
export const listUsers = () => api.get('/users');
export const getUserDetails = (id) => api.get(`/users/${id}`);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
