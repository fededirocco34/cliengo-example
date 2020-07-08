import React from 'react';
import { connect } from 'react-redux';

import logo from '../../../assets/logo.svg';
import styles from './styles.module.scss';
import '../../../scss/application.scss';

function Home({ currentUser }) {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          ¡Welcome <code>{currentUser?.username}</code>!
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser.user
});

export default connect(mapStateToProps, null)(Home);
