import axios from 'axios'
    const token = localStorage.getItem('token')
    const baseUrl = 'http://localhost:3001/api/'
const api = axios.create({
  baseURL: baseUrl,
  //baseURL: 'https://us-central1-pwero-9b223.cloudfunctions.net/app/api/',
  headers: {'Authorization': `Bearer ${token}`}
  
});


export default api