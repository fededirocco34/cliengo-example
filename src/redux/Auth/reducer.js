import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

/* ------------- Auth reducer ------------- */
const defaultState = {
  currentUser: { username: '' },
  message: '',
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
// eslint-disable-next-line new-cap
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return state.merge({
        initialLoading: false,
        currentUser: action.payload.user
      });
    }
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.SET_USER_HEADERS: {
      return state.merge({ loading: true });
    }
    case actions.LOGIN_SUCCESS: {
      return state.merge({
        loading: false,
        currentUser: action.payload.authData,
        err: null
      });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    case actions.REGISTER_SUCCESS: {
      return state.merge({
        loading: false,
        currentUser: action.payload.authData
      });
    }
    case actions.REGISTER_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    case actions.LOGOUT: {
      return state.merge({ loading: false, currentUser: null });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */
export const propTypes = {
  loading: PropTypes.bool.isRequired,
  initialLoading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
    // TODO: Extend user model definition
  })
};
