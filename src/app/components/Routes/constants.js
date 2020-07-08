import { lazy } from 'react';
import i18next from 'i18next';

import Routes from '../../../constants/routes';

const Home = lazy(() => import('../../screens/Home'));
const Login = lazy(() => import('../../screens/Login'));

const MAIN_PUBLIC_PATH = Routes.login;
const MAIN_PRIVATE_PATH = Routes.home;

export const ROUTES = [
  {
    exact: false,
    path: Routes.LOGIN,
    component: Login,
    title: i18next.t('Routes:loginTitle'),
    description: i18next.t('Routes:loginDescription'),
    redirectTo: user => (user ? MAIN_PRIVATE_PATH : undefined)
  },
  {
    exact: false,
    path: Routes.HOME,
    component: Home,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: user => (user ? undefined : MAIN_PUBLIC_PATH)
  }
];
