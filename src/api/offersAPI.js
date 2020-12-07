import { url } from '../const';
import axios from 'axios';
const token = localStorage.getItem('token');

export const fetchOfertas = async () => {
  try {
    const res = await axios.get(`${url}/ofertas`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postOferta = async data => {
  console.log(data);
  try {
    const res = await axios.post(`${url}/ofertas`, data);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const putOferta = async (ofertas_id, data) => {
  try {
    const res = await axios.put(`${url}/ofertas/${ofertas_id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteOferta = async id => {
  try {
    const res = await axios.delete(`${url}/ofertas/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
