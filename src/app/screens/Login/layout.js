import React from 'react';
import i18next from 'i18next';

import FormInput from '../../components/FormInput';
// import { withSpinner } from '../../components/Spinner';
import { stringArrayToObject } from '../../../utils/array';

import styles from './styles.module.scss';

const FIELDS = stringArrayToObject(['email', 'password']);

function Login({ onEmailChange, onPasswordChange, onLogin, loginError, loading }) {
  const errorMessage = loginError?.errorData?.message;
  return (
    <div className={`column center full-width ${styles.container}`}>
      <div className="column center">
        <h1>{i18next.t('Login:login')}</h1>
        <h2>{i18next.t('Login:loginExplanation')}</h2>
      </div>
      <form className={`column ${styles.formContainer}`} onSubmit={onLogin}>
        <FormInput
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder')}
          onChange={onEmailChange}
          disabled={loading}
        />
        <FormInput
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder')}
          onChange={onPasswordChange}
          disabled={loading}
        />
        <div className="column center">
          <button disabled={loading} type="submit" className={`full-width ${styles.button}`}>
            {i18next.t('Login:enter')}
          </button>
          <span className={`row center middle full-width ${errorMessage ? '' : 'hidden'}`}>
            {loginError && i18next.t(`Login:${errorMessage || 'error'}`)}
          </span>
          { /*<a href={PATHS.recoverPassword}>{i18next.t('Login:forgotPassword')}</a>
          <a href={PATHS.registration}>{i18next.t('Login:createAccount')}</a> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
// export default withSpinner({ classNameContainer: styles.loading })(Login);
