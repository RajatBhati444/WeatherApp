import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import {placeWeatherSlice} from '../../WeatherModule/Slices/WeatherSlices';
import {useDispatch} from 'react-redux';

function Router() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      onReady={() => {
        dispatch(placeWeatherSlice.actions.setLoading(false));
      }}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default Router;
