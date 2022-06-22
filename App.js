import React from'react';
import {NavigationContainer}from'@react-navigation/native';
import Tabs from './src/component/Tabs';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = ({navigation}) => {
 return(
    <Provider store={store}>
    <NavigationContainer>
     <Tabs />
    </NavigationContainer>
    </Provider>
)}
export default App;