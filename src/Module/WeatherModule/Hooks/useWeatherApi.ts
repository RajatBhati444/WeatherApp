import {API_KEY} from '../../../../staging';
import apiService from '../../../Redux/apiService';
import {PLACE_API_ERROR_RESPONSE} from '../Types/ResponseTypes';

export const addTagTypes = [] as const;
const DashboardApi = apiService
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      getWeatherWidgets: build.mutation<
        PLACE_API_ERROR_RESPONSE,
        {
          place: string;
        }
      >({
        query: ({place}) => ({
          url: `/current?access_key=${API_KEY}&query=${place}`,
        }),
      }),
    }),
    overrideExisting: false,
  });
export default DashboardApi;

export const {useGetWeatherWidgetsMutation} = DashboardApi;
