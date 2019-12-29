import axios from 'axios';

const $axios = axios.create({
    baseURL: 'http://backend.lifecoach.test/api'
});

export default $axios;
