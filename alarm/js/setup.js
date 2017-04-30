/**
* @flow
*/

import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './redux/store';
import ActionCreator from './redux/actions';

import Alarm from './Alarm';

  class setup extends React.Component {

    constructor() {
      super();
    }
    render() {

      return (
          <Provider store={store}>
            <App />
          </Provider>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      alarms: state.alarms
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
  }

const App = connect(mapStateToProps, mapDispatchToProps)(Alarm);

module.exports = setup;
