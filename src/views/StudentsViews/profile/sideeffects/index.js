import * as experienceService from '../../../../api/experience';
import * as educationService from '../../../../api/education';
import {
	updateUserData,
	updateUserDataError,
	updateUserDataSuccess,
} from '../../../../redux/user/userActions';
import { fetchOneUser2 } from '../../../../api/user';

export const addExperience = async (user = {}, values = {}) => {
	const isNewExperience = values.id;
	const experienceData = {
		...values,
		estudiante: user.id,
	};
	if (isNewExperience) {
		return await experienceService.editExperience(values.id, experienceData);
	}
	return await experienceService.addExperience(experienceData);
};

export const removeExperience = async (id) => {
	return await experienceService.removeExperience(id);
};

export const addEducation = async (user = {}, values = {}) => {
	const isNewEducation = values.id;
	const educationData = {
		...values,
		estudiante: user.id,
	};
	if (isNewEducation) {
		return await educationService.editEducation(values.id, educationData);
	}
	return await educationService.addEducation(educationData);
};

export const removeEducation = async (id) => {
	return await educationService.removeEducation(id);
};

export const resetView = async (id, dispatch) => {
	dispatch(updateUserData());
	try {
		const user = await fetchOneUser2(id);
		dispatch(updateUserDataSuccess(user));
		return user;
	} catch (error) {
		console.error(error);
		dispatch(updateUserDataError());
		throw new Error(error);
	}
};
