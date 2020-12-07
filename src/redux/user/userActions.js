import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	LOGEDIN,
	LOGOUT,
	UPDATE_USER_DATA_ERROR,
	UPDATE_USER_DATA_SUCCESS,
	UPDATE_USER_DATA,
} from './userTypes';

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

export const fetchUsersSuccess = (user) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: user,
	};
};

export const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

export const updateUserData = () => ({
	type: UPDATE_USER_DATA,
});

export const updateUserDataSuccess = (payload) => ({
	type: UPDATE_USER_DATA_SUCCESS,
	payload,
});

export const updateUserDataError = () => ({
	type: UPDATE_USER_DATA_ERROR,
});

export const logedin = (user) => {
	return {
		type: LOGEDIN,
		user: user,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
