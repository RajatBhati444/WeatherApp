import React, {forwardRef, memo, ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {VARIANT} from '../Module/ThemeModule/Types/CommonTypes';
import {useTheme} from '../Module/ThemeModule/Components/ThemeContext';

export type TypographyProps = {
  variant?: VARIANT;
  children?: ReactNode;
} & TextProps &
  TextStyle;

function Typography(
  props: TypographyProps,
  ref: React.LegacyRef<Text> | undefined,
) {
  const {
    style,
    color,
    textDecorationColor = color,

    variant,
    children,
    testID,
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
    accessibilityState,
    accessible,
    adjustsFontSizeToFit,
    allowFontScaling = false,
    ellipsizeMode,
    maxFontSizeMultiplier,
    numberOfLines,
    onLongPress,
    onLayout,
    selectionColor,
    onTextLayout,
    selectable,
    textBreakStrategy,
    onPress,
    ...textStyleProps
  } = props;
  const {theme} = useTheme();

  return (
    <Text
      ref={ref}
      onPress={onPress}
      testID={testID}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessible={accessible}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      numberOfLines={numberOfLines}
      onLongPress={onLongPress}
      onLayout={onLayout}
      selectionColor={selectionColor}
      onTextLayout={onTextLayout}
      selectable={selectable}
      textBreakStrategy={textBreakStrategy}
      style={[
        textStyleProps,
        {
          color: color
            ? color
            : variant
            ? theme.colors[variant]
            : theme.colors.text,
          textDecorationColor: textDecorationColor
            ? textDecorationColor
            : variant
            ? theme.colors[variant]
            : theme.colors.text,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

export default memo(forwardRef(Typography));
