import { url } from '../const';
import axios from 'axios';

export const addExperience = async data => {
  console.log('DATA', data);
  try {
    return await axios.post(`${url}/experiencias`, data);
  } catch (error) {
    console.error(error.message);
  }
};

export const editExperience = async (id, data) => {
  try {
    return await axios.put(`${url}/experiencias/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const removeExperience = async id => {
  try {
    return await axios.delete(`${url}/experiencias/${id}`);
  } catch (error) {
    console.error(error);
  }
};
