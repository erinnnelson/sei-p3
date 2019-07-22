import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const api = axios.create({
  baseURL: BASE_URL,
});

export const getPing = async () => {
  const res = await api.get('/ping');
  return res;
};

const storeToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  if (token !== null) {
    try {
      const resp = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      storeToken(token);
      return resp.data.user;
    } catch (e) {
      console.log(e.message);
      console.log('invalid token');
    }
  }
  else { console.log('user not logged in') };
};


export const createUser = async (data) => {
  const res = await api.post('/users', data);
  storeToken(res.data.token);
  return res.data;
}