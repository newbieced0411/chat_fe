import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
});

// instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export default instance;