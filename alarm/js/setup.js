/**
* @flow
*/

import Alarm from './Alarm';
import React from 'react';

// var { Provider } = require('react-redux');
// var configureStore = require('./store/configureStore');

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
      //   isLoading: true,
      //   store: configureStore(() => this.setState({isLoading: false})),
      // };
    }
    render() {
      // if (this.state.isLoading) {
      //   return null;
      // }
      return (
        // <Provider store={this.state.store}>
          <Alarm />
        // </Provider>
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
