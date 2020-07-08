import React, { useState } from 'react';
/// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../../../redux/Auth/actions';

// import { login, setCurrentUser } from '~services/AuthServices';

import Login from './layout';

function LoginContainer() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const [, loading, loginError, loginRequest] = useLazyRequest({
    request: (credentials) => login(credentials),
    withPostSuccess: response => {
      const userResponse = response;
      dispatch(actionCreators.setUser(userResponse));
      setCurrentUser(userResponse);
      history.push('/');
    }
  });*/

  const handleLogin = event => {
    event.preventDefault();
    const credentials = { username: email, password };
    dispatch(actionCreators.login(credentials));
    // loginRequest(credentials);
  };

  const handleEmailChange = e =>
    setEmail(e.target.value || '');

  const handlePasswordChange = e => {
    setPassword(e.target.value || '');
  };

  return (
    <Login
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
      // loading={false}
      // loginError={null}
    />
  );
}

export default LoginContainer;
