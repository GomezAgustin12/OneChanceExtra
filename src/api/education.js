import { url } from '../const';
import axios from 'axios';

export const addEducation = async (data) => {
	try {
		return await axios.post(`${url}/educacions`, data);
	} catch (error) {
		console.error(error.message);
	}
};

export const editEducation = async (id, data) => {
	try {
		return await axios.put(`${url}/educacions/${id}`, data);
	} catch (error) {
		console.error(error);
	}
};

export const removeEducation = async (id) => {
	try {
		return await axios.delete(`${url}/educacions/${id}`);
	} catch (error) {
		console.error(error);
	}
};
