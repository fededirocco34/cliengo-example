import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store, { history } from '../redux/store';

import { ConnectedRouter } from 'connected-react-router';

import Routes from './components/Routes';
import '../scss/application.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.defaultProps = {
  loading: false
};

export default App;
