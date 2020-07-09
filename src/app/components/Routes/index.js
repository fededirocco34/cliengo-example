import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Suspense from '../Suspense';

import RouteItem from './components/RouteItem';
import { ROUTES } from './constants';
import styles from './styles.module.scss';

function AppRoutes() {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <div className={styles.container}>
      <Suspense>
        <Switch>
        {ROUTES.map(({ redirectTo, path, ...config }) => (
          <RouteItem key={path} path={path} redirectTo={redirectTo?.(currentUser)} {...config} />
        ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default withRouter(AppRoutes);
