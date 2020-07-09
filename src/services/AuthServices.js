import api from '../config/api';
import { actionCreators as authActions } from '../redux/Auth/actions';

import * as LocalStorageService from './LocalStorageService';

const setUserHeaders = ({ 'access-token': accessToken, 'token-type': tokenType, client, expiry, uid }) =>
  api.setHeaders({
    'access-token': accessToken,
    client,
    expiry,
    'token-type': tokenType,
    uid
  });

export const setCurrentUser = ({ data, headers }) => {
  LocalStorageService.setSessionToken({ ...data, ...headers });
};

export const getCurrentUser = () => {
  const currentSessionToken = LocalStorageService.getSessionToken();

  if (currentSessionToken) {
    setUserHeaders(currentSessionToken);
    return currentSessionToken;
  }

  return undefined;
};

export const removeCurrentUser = () => LocalStorageService.removeSessionToken();

export const authSetup = async dispatch => {
  const currentUser = await getCurrentUser();
  dispatch(authActions.init(currentUser));
};

const USER = { id: 1, username: 'Federico' };

export const login = ({ email, password }) => ({ data: { user: USER }, ok: true });

// export const login = ({ email, password }) => api.post('/auth/sign_in', { email, password });

/* export const register = ({ email, username, password }) =>
   api.post('/api/v1/users/sign_up', { user: { email, username, password } }); */
