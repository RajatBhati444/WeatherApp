import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import renderer, {act} from 'react-test-renderer';
import WeatherDataContainer from '../src/Module/WeatherModule/Components/WeatherDataContainer/WeatherDataContainer';
import {useTheme} from '../src/Module/ThemeModule/Components/ThemeContext';

jest.mock('../src/Module/ThemeModule/Components/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

jest.mock('../src/Assets/images', () => ({
  images: {
    windDark: 'windDark.png',
    windLight: 'windLight.png',
    feelsLike: 'feelsLike.png',
    pollution: 'pollution.png',
  },
}));

const store = configureStore({
  reducer: {
    placeWeather: () => ({
      loading: false,
      placeData: {
        current: {
          wind_kph: 10,
          feelslike_c: 20,
          air_quality: {
            pm2_5: 5,
            pm10: 10,
            o3: 15,
            no2: 20,
            so2: 25,
          },
        },
      },
    }),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

describe('WeatherDataContainer', () => {
  it('renders weather data correctly with mock state', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: {
        type: 'light',
        colors: {
          surface: '#fff',
          onSurface: '#000',
          lightBackground: '#f7f7f7',
          background: '#fff',
          text: '#000',
        },
      },
    });

    let tree: unknown;
    act(() => {
      tree = renderer.create(
        <Provider store={store}>
          <WeatherDataContainer />
        </Provider>,
      );
    });

    expect(tree.toJSON()).toBeTruthy(); // Ensures component renders
  });
});
