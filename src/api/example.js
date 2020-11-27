import axios from 'axios';
import { url } from '../constants/index.json';
const token = localStorage.getItem('token');

export const fetchCategory = async () => {
  try {
    const res = await axios.get(`${url}/categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.body;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneCategory = async _id => {
  try {
    const res = await axios.get(`${url}/categories/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.body;
  } catch (error) {
    console.error(error);
  }
};

export const postCategory = async data => {
  try {
    const res = await axios.post(`${url}/categories`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchCategory = async (data, category_id) => {
  try {
    const res = await axios.patch(`${url}/categories/${category_id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = async id => {
  try {
    const res = await axios.delete(`${url}/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
