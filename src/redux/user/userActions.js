import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT,
  LOGEDIN
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = user => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const logedin = user => {
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