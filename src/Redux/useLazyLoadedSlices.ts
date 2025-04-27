import {combineSlices} from '@reduxjs/toolkit';
import apiService from './apiService';
import {placeWeatherSlice} from '../Module/WeatherModule/Slices/WeatherSlices';

// @ts-ignore
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(placeWeatherSlice, {
  [apiService.reducerPath]: apiService.reducer,
}).withLazyLoadedSlices<LazyLoadedSlices>();
