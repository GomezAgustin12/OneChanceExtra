import { url } from '../const';
import axios from 'axios';
const token = localStorage.getItem('token');

export const fetchRecruiters = async () => {
  try {
    const res = await axios.get(`${url}/recluters`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneRecruiter = async user_id => {
  try {
    const res = await axios.get(`${url}/recluters/${user_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postRecruiter = async data => {
  try {
    const res = await axios.post(`${url}/recluters`, data);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
