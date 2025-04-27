import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../../Screens/Home/HomeScreen';
import {Platform} from 'react-native';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export type MainStackParamList = {
  Home: undefined;
};

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        headerShown: false,
      }}>
      <MainStack.Group>
        <MainStack.Screen name={'Home'} component={HomeScreen} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
