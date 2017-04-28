/**
* @flow
*/

import Alarm from './Alarm';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

// function setup(): ReactClass<{}> {
//   console.disableYellowBox = true;

  class setup extends React.Component {

    state: {
      isLoading: boolean,
      store: any;
    };

    constructor() {
      super();
      // console.disableYellowBox = true;
      this.state = {
          isLoading: true,
          // store: configureStore(() => this.setState({isLoading: false})),
          store: configureStore
      };
    }
    render() {
      // if (this.state.isLoading) {
      //   return null;
      // }
      return (
        <Provider store={this.state.store}>
          <Alarm />
        </Provider>
      );
    }
  }

//   return Root;
// }

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;
