import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

const withRedux = (store: any) => (WrappedComponent: any) => () =>
class ReduxWrapper extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <WrappedComponent {...this.props} />
      </Provider>
    );
  }
};

export default withRedux;
