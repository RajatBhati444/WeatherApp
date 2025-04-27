import React, {useMemo} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import {useTheme} from '../Module/ThemeModule/Components/ThemeContext';
import {VARIANT} from '../Module/ThemeModule/Types/CommonTypes';

interface BodyProps extends ScrollViewProps {
  backgroundColor?: string;
  children?: any;
  variant?: VARIANT;
}

function Body(props: BodyProps) {
  const {style, backgroundColor, variant} = props;
  const {theme} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          flexGrow: 1,
          backgroundColor: backgroundColor
            ? backgroundColor
            : variant
            ? theme.colors[variant]
            : theme.colors.background,
        },
      }),
    [backgroundColor, theme.colors, variant],
  );
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={[styles.containerStyle, style]}
        keyboardShouldPersistTaps={'handled'}
        //@ts-ignore
        enableOnAndroid={false}
        showsVerticalScrollIndicator={false}
        {...props}
      />
    </KeyboardAvoidingView>
  );
}

export default Body;
