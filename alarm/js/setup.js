/**
* @flow
*/

import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';


import AlarmNav from './AlarmNav';

  class setup extends React.Component {

    constructor() {
      super();
    }
    render() {

      return (
          <Provider store={store}>
            <AlarmNav />
          </Provider>
      );
    }
  }



module.exports = setup;
