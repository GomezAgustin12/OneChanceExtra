import { url } from '../const';
import axios from 'axios';
const token = localStorage.getItem('token');

export const fetchRecruiters = async () => {
  try {
    const res = await axios.get(
      `${url}/recluters`
      //  {
      //    headers: { Authorization: `Bearer ${token}` },
      //  }
    );
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
