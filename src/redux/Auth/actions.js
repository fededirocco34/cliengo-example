import { push } from 'connected-react-router';

import * as AuthService from '../../services/AuthServices';
import Routes from '../../constants/routes';
import { stringArrayToObject } from '../../utils/array';

/* ------------- Auth actions ------------- */
export const actions = stringArrayToObject(
  [
    'LOGIN',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'LOGOUT',
    'AUTH_INIT',
    'REGISTER',
    'REGISTER_SUCCESS',
    'REGISTER_FAILURE',
    'SET_USER_HEADERS',
  ],
  '@@AUTH'
);

const privateActionCreators = {
  loginSuccess(authData) {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { authData }
    };
  },
  loginFailure(err) {
    return {
      type: actions.LOGIN_FAILURE,
      payload: { err }
    };
  },
  /* registerSuccess(userData) {
    return {
      type: actions.REGISTER_SUCCESS,
      payload: { userData }
    };
  },
  registerFailure(err) {
    return {
      type: actions.REGISTER_FAILURE,
      payload: { err }
    };
  }, */
};

export const actionCreators = {
  init(user) {
    return {
      type: actions.AUTH_INIT,
      payload: { user }
    };
  },

  setUserHeaders(headers) {
    return async dispatch => {
      dispatch({ type: actions.SET_USER_HEADERS });
      await AuthService.setCurrentUser({ headers });
    };
  },

  login(authData, route) {
    return async dispatch => {
      dispatch({ type: actions.LOGIN });
      try {
        const response = await AuthService.login(authData);
        if (response.ok) {
          await AuthService.setCurrentUser(response);
          await AuthService.authSetup(dispatch);
          dispatch(privateActionCreators.loginSuccess(response.data));
          const redirectRoute = route || Routes.HOME;
          dispatch(push(redirectRoute));
        } else {
          dispatch(privateActionCreators.loginFailure(response.data.errors[0]));
        }
      } catch (e) {
        dispatch(privateActionCreators.loginFailure(e));
      }
    };
  },

  /* logout() {
    return async dispatch => {
      await AuthService.removeCurrentUser();
      dispatch({ type: actions.LOGOUT });
      dispatch(push(Routes.LOGIN));
    };
  }, */

  /* register(userData) {
    const { email, password } = userData;
    return async dispatch => {
      dispatch({ type: actions.REGISTER });
      const response = await AuthService.register(userData);
      if (response.ok) {
        dispatch(this.login({ email, password }, Routes.LINKEDIN));
      } else {
        dispatch(privateActionCreators.registerFailure(response.data.errors[0]));
      }
    };
  }, */

  getCurrentUser() {
    return async dispatch => {
      await AuthService.authSetup(dispatch);
    };
  },
};
