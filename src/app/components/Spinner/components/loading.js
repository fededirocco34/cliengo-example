import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import { SPINNER_DEFAULT, TYPE_SPINNER } from './constants';

function Loading({ className, type }) {
  return <Spinner name={type} fadeIn="none" className={className} />;
}

Loading.defaultProps = {
  className: '',
  type: SPINNER_DEFAULT
};

Loading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(TYPE_SPINNER)
};

export default Loading;
