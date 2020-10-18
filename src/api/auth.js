import axios from 'axios';
import { url } from '../const';
import jwt_decode from 'jwt-decode';

export const login = async data => {
  var response = await axios.post(`${url}/auth/local`, {
    identifier: data.username,
    password: data.password,
  });
  console.log(response.data);
  localStorage.setItem('token', response.data.jwt);

  const payload = jwt_decode(response.data.jwt);
  return { ...payload, token: response.data.jwt };
};

export const verifyUser = async token => {
  const res = await axios.get(`${url}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
