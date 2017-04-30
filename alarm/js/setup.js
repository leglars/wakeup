/**
* @flow
*/

import Alarm from './Alarm';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {ActionCreators} from './redux/actions/index';

import store from './redux/store';

// function setup(): ReactClass<{}> {
//   console.disableYellowBox = true;

  class setup extends React.Component {

    // state: {
    //   isLoading: boolean,
    //   store: any;
    // };

    constructor() {
      super();
      // console.disableYellowBox = true;
      // this.state = {
      //     isLoading: true,
      //     // store: configureStore(() => this.setState({isLoading: false})),
      //     store: configureStore
      // };
    }
    render() {
      // if (this.state.isLoading) {
      //   return null;
      // }
      return (
        <Provider store={store} >
          <App />
        </Provider>

      );
    }
  }

//   return Root;
// }

function mapDispachToProps(dispatch) {
      return bindActionCreators(ActionCreators, dispatch);
}
//
const App = connect(() => {return {}}, mapDispachToProps)(Alarm);


global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;
