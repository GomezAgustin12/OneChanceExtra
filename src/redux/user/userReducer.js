import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT,
} from "./userTypes";

const initialState = {
  loading: false,
  user: {},
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
        loading: false,
        user: action.payload || initialState.user,
        isLogin: true,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: true,
        isLogin: false,
      };
    case LOGOUT:
      return {
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;
