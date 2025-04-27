import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../Redux/store';
import {PLACE_API_RESPONSE} from '../Types/ResponseTypes';

interface WEATHER_INITIAL_STATE {
  loading: boolean;
  placeData: PLACE_API_RESPONSE | null;
}

const initialState: WEATHER_INITIAL_STATE = {
  loading: true,
  placeData: null,
};

export const placeWeatherSlice = createSlice({
  name: 'placeWeather',
  initialState,
  reducers: {
    setPlaceData: (state, action) => {
      return {
        ...state,
        placeData: action.payload,
      };
    },
    setLoading: (state, action) => {
      console.log(action.payload, 'action.payload');

      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const loadingState = (state: RootState) => state.placeWeather.loading;

export const placeData = (state: RootState) => state.placeWeather.placeData;
