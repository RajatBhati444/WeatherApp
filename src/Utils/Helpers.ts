import Axios, {AxiosRequestConfig} from 'axios';
import {API_URL} from '../../staging';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

export const fetcher = async (config: AxiosRequestConfig) => {
  const {url, method, data, headers} = config;

  return await Axios.request({
    baseURL: API_URL,
    url,
    method: method ?? 'GET',
    data,
    ...config,
    headers: {
      ...config?.headers,
      ...headers,
    },
  });
};

export const onError = (error: any) => {
  console.log({error: error?.response});
  if (error?.response) {
    if (error?.response?.data?.message) {
    }
    if (error?.response?.status === 401) {
    }
  } else {
    console.log({error});
  }
};

export const useAppSelector = useSelector.withTypes<RootState>();
