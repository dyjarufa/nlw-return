import axios from 'axios';


export const api = axios.create({
  baseURL: 'http://172.17.53.190:3333',
})