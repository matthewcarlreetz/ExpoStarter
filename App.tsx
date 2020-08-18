import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UseState from './src/views/Hooks/UseState';
import UseEffect from './src/views/Hooks/UseEffect';
import Home from './src/views/Home';
import UseCallback from './src/views/Hooks/UseCallback';
import UseMemo from './src/views/Hooks/UseMemo';
import UseReducer from './src/views/Hooks/UseReducer';
import UseContext from './src/views/Hooks/UseContext';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UseState" component={UseState} />
        <Stack.Screen name="UseEffect" component={UseEffect} />
        <Stack.Screen name="UseCallback" component={UseCallback} />
        <Stack.Screen name="UseMemo" component={UseMemo} />
        <Stack.Screen name="UseReducer" component={UseReducer} />
        <Stack.Screen name="UseContext" component={UseContext} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
