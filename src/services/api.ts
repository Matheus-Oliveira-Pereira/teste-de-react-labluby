import axios, { AxiosError } from 'axios';

let token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: ' https://autoluby.k8s.luby.me/',
});

export const authAxios = axios.create({
  baseURL: ' https://autoluby.k8s.luby.me/',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})