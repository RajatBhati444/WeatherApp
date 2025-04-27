import React, {forwardRef, memo, ReactNode, useMemo} from 'react';
import {Platform, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {VARIANT} from '../Module/ThemeModule/Types/CommonTypes';
import {useTheme} from '../Module/ThemeModule/Components/ThemeContext';

export type StackProps = {
  children?: ReactNode;
  variant?: VARIANT;
  padding?: number;
  paddingBottom?: number;
  paddingEnd?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingStart?: number;
  paddingTop?: number;
  paddingVertical?: number;
  margin?: number;
  marginBottom?: number;
  marginEnd?: number;
  marginHorizontal?: number;
  marginLeft?: number;
  marginRight?: number;
  marginStart?: number;
  marginTop?: number;
  marginVertical?: number;
} & ViewProps &
  ViewStyle;

function Stack(props: StackProps, ref: React.LegacyRef<View>) {
  const {
    children,
    elevation = 0,
    style,
    variant,
    backgroundColor,
    onLayout,
    pointerEvents,
    testID,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    ...styleProps
  } = props;
  const {theme} = useTheme();

  const iosShadowElevation = useMemo(
    () =>
      elevation === 0
        ? {}
        : {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
              height: 0.6 * elevation,
              width: 0,
            },
            shadowColor: theme.colors.surface,
          },
    [elevation, theme.colors.surface],
  );

  const memoisedStyles = useMemo(
    () =>
      StyleSheet.create({
        viewStyles: {
          backgroundColor: backgroundColor
            ? backgroundColor
            : variant
            ? theme.colors[variant]
            : theme.colors.transparent,
          padding: padding,
          paddingBottom: paddingBottom,
          paddingEnd: paddingEnd,
          paddingHorizontal: paddingHorizontal,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          paddingStart: paddingStart,
          paddingTop: paddingTop,
          paddingVertical: paddingVertical,
          margin: margin,
          marginBottom: marginBottom,
          marginEnd: marginEnd,
          marginHorizontal: marginHorizontal,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginStart: marginStart,
          marginTop: marginTop,
          marginVertical: marginVertical,
        },
      }),
    [
      backgroundColor,
      margin,
      marginBottom,
      marginEnd,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginStart,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingEnd,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingStart,
      paddingTop,
      paddingVertical,
      theme.colors,
      variant,
    ],
  );

  return (
    <View
      ref={ref}
      testID={testID}
      onLayout={onLayout}
      pointerEvents={pointerEvents}
      style={[
        Platform.OS === 'ios' ? iosShadowElevation : {elevation},
        styleProps,
        memoisedStyles.viewStyles,
        style,
      ]}>
      {children}
    </View>
  );
}

export default memo(forwardRef(Stack));
