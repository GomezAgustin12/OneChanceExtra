import axios from 'axios';
import { url } from '../const';
// const token = localStorage.getItem('token');

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`${url}/users`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneUser = async _id => {
  try {
    const res = await axios.get(`${url}
    ​/users-permissions​/search​${_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postUser = async data => {
  try {
    const res = await axios.post(`${url}/auth/local/register`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const putUser = async (data, user_id) => {
  try {
    const res = await axios.put(`${url}/users/${user_id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async id => {
  try {
    const res = await axios.delete(`${url}/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
