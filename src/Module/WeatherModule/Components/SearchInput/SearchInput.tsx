import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../../../Assets/images';
import Stack from '../../../../Components/Stack';
import Typography from '../../../../Components/Typography';
import {useTheme} from '../../../ThemeModule/Components/ThemeContext';
import {useGetWeatherWidgetsMutation} from '../../Hooks/useWeatherApi';
import {placeWeatherSlice} from '../../Slices/WeatherSlices';
import {useDispatch} from 'react-redux';

function SearchInput() {
  const dispatch = useDispatch();
  const {theme} = useTheme();
  const {control, handleSubmit} = useForm({
    defaultValues: {
      place: '',
    },
  });

  const [getWeatherWidgets, {isLoading, data}] = useGetWeatherWidgetsMutation();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (data) {
      dispatch(placeWeatherSlice.actions.setPlaceData(data));
    }
  }, [data, isLoading, dispatch]);

  const handleSearch = handleSubmit(({place}) => {
    if (place.trim()) {
      dispatch(placeWeatherSlice.actions.setPlaceData(null));
      getWeatherWidgets({place});
    }
  });

  return (
    <Stack>
      <Stack
        style={[
          styles.searchContainer,
          {backgroundColor: theme.colors.lightBackground},
        ]}>
        <Controller
          control={control}
          name="place"
          render={({field}) => (
            <Stack style={styles.searchInput}>
              <Image
                tintColor={theme.colors.onSurface}
                source={images.search}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="search your place"
                placeholderTextColor={theme.colors.text}
                style={[
                  styles.textInput,
                  {
                    color: theme.colors.text,
                  },
                ]}
                multiline={false}
                onChangeText={field.onChange}
                autoCapitalize="none"
                {...field}
              />
            </Stack>
          )}
        />

        <TouchableOpacity
          style={[
            styles.searchButton,
            {backgroundColor: theme.colors.background},
          ]}
          onPress={handleSearch}>
          <Typography fontSize={16} variant="onSurface">
            Search
          </Typography>
        </TouchableOpacity>
      </Stack>
      {isLoading && <ActivityIndicator />}
      {data?.error ? (
        <Typography style={styles.errorText}>Something wrong ❌</Typography>
      ) : null}
    </Stack>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    lineHeight: 16 * 1.2 - 1.4,
    textAlignVertical: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  searchButton: {
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
