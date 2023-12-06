import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://185.22.61.73:8087',
});
