/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigator from '@app/navigations/navigators/AppNavigator';
import store from '@app/stores';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  handlerRootView: {flex: 1},
});

export default App;
