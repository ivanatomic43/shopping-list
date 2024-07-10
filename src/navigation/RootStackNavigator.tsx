import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './navigation-types';
import MainStackNavigator from './MainStackNavigator';
import ProductScreen from '../screens/ProductScreen';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = (): React.JSX.Element => {
  return (
    <RootStack.Navigator
      initialRouteName="MainStack"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="MainStack" component={MainStackNavigator} />
      <RootStack.Screen name="Product" component={ProductScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
