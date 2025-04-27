import {BaseQueryFn, createApi} from '@reduxjs/toolkit/query/react';
import Axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {API_URL} from '../../staging';

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig<unknown>, unknown, AxiosError> =>
  async ({url, method, data, params, headers}) => {
    try {
      Axios.defaults.baseURL = API_URL;
      const result = await Axios({
        url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error,
      };
    }
  };

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: 'apiService',
});

export default apiService;
