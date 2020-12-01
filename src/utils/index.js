import jwt_decode from 'jwt-decode';
const token = localStorage.getItem('token');
/**
 * @description The function is in charge of decoding the jwt tokens
 */

export const decodeUser = (jwt = token) => {
  if (jwt === null) return;
  return jwt_decode(jwt);
};
