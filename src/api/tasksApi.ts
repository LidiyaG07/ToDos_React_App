import axios from 'axios';

const BASE_URL = 'https://tasks-service-maks1394.amvera.io';

export const tasksApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
