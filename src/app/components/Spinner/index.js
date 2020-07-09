import React from 'react';
import PropTypes from 'prop-types';

import Loading from './components/loading';
import { TYPE_SPINNER } from './components/constants';

export function withSpinner({ WrappedComponent, loader, classNameContainer, classNameLoading, typeLoading }) {
  function Spinner({ loading, customLoader, ...props }) {
    const Loader = customLoader || loader;
    const ONLOADER = Loader ? (
      <Loader />
    ) : (
      <div className={classNameContainer}>
        <Loading className={classNameLoading} type={typeLoading} />
      </div>
    );
    debugger
    return loading ? ONLOADER : <WrappedComponent {...props} />;
  }

  Spinner.propTypes = {
    customLoader: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    loading: PropTypes.bool,
    props: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  return Spinner;
}

withSpinner.propTypes = {
  classNameContainer: PropTypes.string,
  classNameLoading: PropTypes.string,
  typeLoading: PropTypes.oneOf(TYPE_SPINNER),
  WrappedComponent: PropTypes.node
};

withSpinner.defaultProps = {
  classNameContainer: ''
};
