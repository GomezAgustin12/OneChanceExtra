import * as experienceService from '../../../../api/experience';
import * as educationService from '../../../../api/education';
import {
  updateUserData,
  updateUserDataError,
  updateUserDataSuccess,
} from '../../../../redux/user/userActions';
import { fetchOneRecruiter } from '../../../../api';

export const addExperience = async (user = {}, values = {}) => {
  console.log('USER', user);
  console.log('VALUES', values);
  const isNewExperience = values.id;
  const experienceData = {
    ...values,
    user: user.user.id,
  };
  if (isNewExperience) {
    return await experienceService.editExperience(values.id, experienceData);
  }
  return await experienceService.addExperience(experienceData);
};

export const removeExperience = async id => {
  return await experienceService.removeExperience(id);
};

export const addEducation = async (user = {}, values = {}) => {
  const isNewEducation = values.id;
  const educationData = {
    ...values,
    user: user.user.id,
  };
  if (isNewEducation) {
    return await educationService.editEducation(values.id, educationData);
  }
  return await educationService.addEducation(educationData);
};

export const removeEducation = async id => {
  return await educationService.removeEducation(id);
};

export const resetView = async (id, dispatch) => {
  dispatch(updateUserData());
  console.log(id);
  try {
    const user = await fetchOneRecruiter(id);
    dispatch(updateUserDataSuccess(user));
    return user;
  } catch (error) {
    console.error(error);
    dispatch(updateUserDataError());
    throw new Error(error);
  }
};
