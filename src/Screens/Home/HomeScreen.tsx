import React from 'react';
import {ActivityIndicator} from 'react-native';
import Container from '../../Components/Container';
import Body from '../../Components/Body';
import Stack from '../../Components/Stack';
import {useTheme} from '../../Module/ThemeModule/Components/ThemeContext';
import {loadingState} from '../../Module/WeatherModule/Slices/WeatherSlices';
import {useSelector} from 'react-redux';
import SearchInput from '../../Module/WeatherModule/Components/SearchInput/SearchInput';
import ThemeToggle from '../../Module/WeatherModule/Components/ThemeToggle/ThemeToggle';
import WeatherDataContainer from '../../Module/WeatherModule/Components/WeatherDataContainer/WeatherDataContainer';

const HomeScreen: React.FC = () => {
  const loading = useSelector(loadingState);

  const {theme} = useTheme();

  return (
    <Container
      statusBarStyle={theme.type === 'dark' ? 'light-content' : 'dark-content'}
      statusBarBackgroundColor={theme.colors.background}
      fullScreen={false}>
      <Body>
        {loading && <ActivityIndicator size={'large'} />}
        <Stack padding={16}>
          <ThemeToggle />
          <SearchInput />
          <WeatherDataContainer />
        </Stack>
      </Body>
    </Container>
  );
};

export default HomeScreen;
