import axios from 'axios';
import { env } from '~/constants/env';

const apiInstance = axios.create({
  baseURL: env('PUBLIC_API_URL'),
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiInstance };
