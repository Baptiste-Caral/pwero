import axios from 'axios'
//import {config} from './Constants'


const token = localStorage.getItem('token')

const prod = {
  url: {
   API_URL: "https://us-central1-pwero-9b223.cloudfunctions.net/app/api/",
 }
 };
 const dev = {
  url: {
   API_URL: "http://localhost:3001/api/"
  }
 };
 export const config = process.env.NODE_ENV === 'development' ? dev : prod;
    
 export const api = axios.create({
  baseURL: config.url.API_URL,
  //baseURL: 'https://us-central1-pwero-9b223.cloudfunctions.net/app/api/',
  headers: {'Authorization': `Bearer ${token}`}
  
})

