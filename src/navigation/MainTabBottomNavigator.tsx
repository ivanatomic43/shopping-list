import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {MainTabParamsList} from './navigation-types';

import ShoppingListScreen from '../screens/ShoppingListScreen';
import {Colors} from '../styles';

const MainTab = createBottomTabNavigator<MainTabParamsList>();

const MainTabNavigator = (): React.JSX.Element => {
  return (
    <MainTab.Navigator
      backBehavior="history"
      initialRouteName="ShoppingList"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: Colors['app.primary'],
        },
        tabBarLabelStyle: {
          color: Colors['layout.white'],
          fontSize: 12,
          paddingBottom: 13,
        },
      }}>
      <MainTab.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{
          tabBarIcon: () => {
            return null;
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
