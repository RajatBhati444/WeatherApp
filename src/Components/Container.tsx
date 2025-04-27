import {useFocusEffect} from '@react-navigation/core';
import React, {Fragment, useCallback} from 'react';
import {Platform, StatusBar, StatusBarStyle} from 'react-native';

import Stack from './Stack';
import {VARIANT} from '../Module/ThemeModule/Types/CommonTypes';
import {useTheme} from '../Module/ThemeModule/Components/ThemeContext';
import SafeAreaStack from './SafeAreaStack';

export type ContainerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  fullScreen?: boolean;
  variant?: VARIANT;
};

function Container(props: ContainerProps) {
  const {
    children,
    backgroundColor,
    fullScreen = true,
    statusBarBackgroundColor = '#251404',
    statusBarStyle = 'light-content',
    variant,
  } = props;
  const {theme} = useTheme();
  const statusBarBackgroundColorIos =
    statusBarBackgroundColor ??
    (fullScreen ? theme.colors.transparent : theme.colors.transparent);
  const screenBackgroundColor = backgroundColor
    ? backgroundColor
    : variant
    ? theme.colors[variant]
    : theme.colors.surface;

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(fullScreen ?? false);
        StatusBar.setBackgroundColor(
          statusBarBackgroundColor ?? theme.colors.adaptivePrimary,
        );
      }
      StatusBar.setBarStyle(statusBarStyle);
    }, [
      fullScreen,
      statusBarBackgroundColor,
      statusBarStyle,
      theme.colors.adaptivePrimary,
    ]),
  );

  return (
    <Stack flex={1} backgroundColor={screenBackgroundColor}>
      {fullScreen ? (
        <Fragment>{children}</Fragment>
      ) : (
        <Fragment>
          <SafeAreaStack
            flex={0}
            backgroundColor={statusBarBackgroundColorIos}
          />
          <SafeAreaStack flex={1} backgroundColor={screenBackgroundColor}>
            {children}
          </SafeAreaStack>
        </Fragment>
      )}
    </Stack>
  );
}

export default Container;
