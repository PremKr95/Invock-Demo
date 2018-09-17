import { AppRegistry } from 'react-native';
import { GlobalStack } from './invockDemo/RootStack.js';
import { YellowBox } from 'react-native';
import React, { Component } from 'react';
import {Provider} from 'react-redux'

// import {AppNavigator} from './AppNavigator'

import configureStore from './invockDemo/store.js'
const store = configureStore()


export class Program1 extends Component {

    constructor(props) {
        super(props);
    } 

  render() {
    return(
      // <Provider> allows us to access the store for dispatching actions and receiving data from
      // the state in it's children i.e. <App/>
      <Provider store={store}>
        <GlobalStack/>
      </Provider>
    )
  }
}


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('Program1', () => Program1);


