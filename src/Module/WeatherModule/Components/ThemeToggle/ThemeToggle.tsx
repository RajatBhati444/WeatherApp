import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../../../Assets/images';
import Stack from '../../../../Components/Stack';
import {useTheme} from '../../../ThemeModule/Components/ThemeContext';

function ThemeToggle() {
  const {toggleTheme, theme} = useTheme();
  return (
    <Stack style={styles.themeIconContainer}>
      <TouchableOpacity onPress={toggleTheme}>
        <Image
          style={styles.themeIcon}
          source={theme.type !== 'dark' ? images.lightMode : images.darkMode}
        />
      </TouchableOpacity>
    </Stack>
  );
}

export default ThemeToggle;

const styles = StyleSheet.create({
  themeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  themeIcon: {
    height: 30,
    width: 30,
  },
});
