import axios from 'axios'
    const token = localStorage.getItem('token')
    
const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  //baseURL: 'https://us-central1-pwero-9b223.cloudfunctions.net/app/api/',
  headers: {'Authorization': `Bearer ${token}`}
  
});


export default api