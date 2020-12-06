import { url } from '../const';
import axios from 'axios';
const token = localStorage.getItem('token');

export const fetchStudents = async () => {
  try {
    const res = await axios.get(
      `${url}/estudiantes`
      //  {
      //    headers: { Authorization: `Bearer ${token}` },
      //  }
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postStudent = async data => {
  try {
    const res = await axios.post(`${url}/estudiantes`, data);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const putStudent = async (student_id, data) => {
  try {
    const res = await axios.put(`${url}/estudiantes/${student_id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudent = async id => {
  try {
    const res = await axios.delete(`${url}/estudiantes/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
