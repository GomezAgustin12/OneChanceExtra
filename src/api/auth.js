import axios from 'axios';
import { url } from '../const';

export const login = async data => {
  var response = await axios.post(`${url}/auth/local`, {
    identifier: data.username,
    password: data.password,
  });
  localStorage.setItem('token', response.data.jwt);
  let res = {};

  if (response.data.user.AppRole === 'student') {
    res = await axios.get(
      `${url}/estudiantes?user.id=${response.data.user._id}`
    );
  }
  if (response.data.user.AppRole === 'recruiter') {
    res = await axios.get(`${url}/recluters?user.id=${response.data.user._id}`);
  }

  return res.data[0];
};

export const verifyUser = async token => {
  const res = await axios.get(`${url}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
