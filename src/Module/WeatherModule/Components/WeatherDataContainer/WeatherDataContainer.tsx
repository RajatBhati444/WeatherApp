import React from 'react';
import Stack from '../../../../Components/Stack';
import {Image, StyleSheet} from 'react-native';
import {images} from '../../../../Assets/images';
import Typography from '../../../../Components/Typography';
import LineItem from '../LineItem/LineItem';
import {useSelector} from 'react-redux';
import {placeData} from '../../Slices/WeatherSlices';
import {useTheme} from '../../../ThemeModule/Components/ThemeContext';

function WeatherDataContainer() {
  const {theme} = useTheme();
  const placesData = useSelector(placeData);
  const {location, current} = placesData || {};
  const {name, country} = location || {};
  const {
    observation_time,
    temperature,
    weather_icons = [],
    weather_descriptions = [],
    astro,
    air_quality,
    wind_speed,
    wind_degree,
    wind_dir,
    pressure,
    humidity,
    feelslike,
  } = current || {};
  return (
    <Stack>
      {(location || current) && (
        <Stack>
          {/* search place  */}
          <Stack
            elevation={5}
            padding={16}
            borderRadius={16}
            backgroundColor={theme.colors.lightBackground}
            flexDirection="row">
            <Stack justifyContent="center" alignItems="flex-start" flex={2}>
              <Typography marginBottom={6} fontWeight={'600'} fontSize={32}>
                {name}
              </Typography>
              <Typography
                marginBottom={8}
                fontWeight={'500'}
                fontSize={23}
                variant="placeholder">
                {country}
              </Typography>
              <Typography marginBottom={4} fontWeight={'700'} fontSize={38}>
                {temperature}°C
              </Typography>
              <Typography fontStyle="italic" variant="placeholder">
                Observed at {observation_time}
              </Typography>
            </Stack>

            <Stack justifyContent="center" alignItems="center" flex={1}>
              {(weather_icons || []).length > 0 && (
                <Image
                  source={{uri: weather_icons[0]}}
                  style={styles.weatherIcon}
                />
              )}
              <Stack height={16} />
              <Typography fontSize={22} textAlign="center">
                {weather_descriptions.join(', ')}
              </Typography>
            </Stack>
          </Stack>

          <Stack height={22} />

          <Stack flexDirection="row">
            {/* sunrise and sunset */}
            <Stack
              flex={1}
              elevation={5}
              padding={16}
              borderRadius={16}
              backgroundColor={theme.colors.lightBackground}>
              <LineItem title="Sunrise" value={`${astro?.sunrise}`} />
              <Stack marginVertical={10} height={0.5} variant="divider" />
              <LineItem title="Sunset" value={`${astro?.sunset}`} />
            </Stack>
            <Stack width={22} />
            {/* moonrise and moonset */}
            <Stack
              flex={1}
              elevation={5}
              padding={16}
              borderRadius={16}
              backgroundColor={theme.colors.lightBackground}>
              <LineItem title="Moonrise" value={`${astro?.moonrise}`} />
              <Stack marginVertical={10} height={0.5} variant="divider" />
              <LineItem title="Moonset" value={`${astro?.moonset}`} />
            </Stack>
          </Stack>

          <Stack height={22} />

          {/* wind speed, Direction and direction */}
          <Stack
            flex={1}
            elevation={5}
            padding={16}
            borderRadius={16}
            backgroundColor={theme.colors.lightBackground}>
            <Stack alignItems="center" flexDirection="row">
              <Image
                style={styles.windIcon}
                source={
                  theme.type === 'dark' ? images.windLight : images.windDark
                }
              />
              <Typography fontWeight={'700'} fontSize={22}>
                Wind
              </Typography>
            </Stack>
            <Stack height={12} />
            <LineItem title="Wind" value={`${wind_speed} kph`} />
            <Stack marginVertical={10} height={0.5} variant="divider" />
            <LineItem title="Direction" value={`${wind_degree} ${wind_dir}`} />
            <Stack marginVertical={10} height={0.5} variant="divider" />
            <LineItem title="Pressure" value={`${pressure} hpa`} />
          </Stack>

          <Stack height={22} />

          {/* feels like and humidity */}
          <Stack
            flex={1}
            elevation={5}
            padding={16}
            borderRadius={16}
            backgroundColor={theme.colors.lightBackground}>
            <Stack alignItems="center" flexDirection="row">
              <Image
                style={styles.windIcon}
                tintColor={theme.colors.onSurface}
                source={images.feelsLike}
              />
              <Typography fontWeight={'700'} fontSize={22}>
                Feels Like
              </Typography>
            </Stack>
            <Stack height={12} />
            <LineItem title="Feels like" value={`${feelslike}°C`} />
            <Stack marginVertical={10} height={0.5} variant="divider" />
            <LineItem title="Humidity" value={`${humidity}%`} />
          </Stack>
          <Stack height={22} />

          {/* air quality */}
          <Stack
            flex={1}
            elevation={5}
            padding={16}
            borderRadius={16}
            backgroundColor={theme.colors.lightBackground}>
            <Stack alignItems="center" flexDirection="row">
              <Image
                style={styles.windIcon}
                tintColor={theme.colors.onSurface}
                source={images.pollution}
              />
              <Typography fontWeight={'700'} fontSize={22}>
                Air Quality
              </Typography>
            </Stack>
            <Stack height={12} />
            <LineItem title="PM2.5" value={`${air_quality?.pm2_5}`} />
            <Stack marginVertical={10} height={0.5} variant="divider" />
            <LineItem title="Оз" value={`${air_quality?.o3}`} />
            <Stack marginVertical={10} height={0.5} variant="divider" />
            <LineItem title="CO" value={`${air_quality?.co}`} />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default WeatherDataContainer;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  searchButton: {
    padding: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  windIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  themeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  themeIcon: {
    height: 30,
    width: 30,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
