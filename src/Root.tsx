import React, {createRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import {appStyles} from './styles';

const Root = (): React.JSX.Element => {
  const navigationRef = createRef<NavigationContainerRef<any>>();

  return (
    <GestureHandlerRootView style={[appStyles.fullSize]}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default Root;
