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

const initialState = {
	loading: false,
	user: {
		AppRole: '',
	},
	isLogin: false,
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload || initialState.user,
				isLogin: true,
			};
		case FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				isLogin: false,
			};
		case LOGOUT:
			localStorage.clear();
			return {
				...state,
				loading: false,
				user: {
					AppRole: '',
				},
				isLogin: false,
				error: false,
			};
		case LOGEDIN:
			return {
				...state,
				loading: false,
				isLogin: true,
				user: action.user || initialState.user,
			};
		case UPDATE_USER_DATA:
			return {
				...state,
				loading: true,
				error: false,
			};
		case UPDATE_USER_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		case UPDATE_USER_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

export default reducer;
