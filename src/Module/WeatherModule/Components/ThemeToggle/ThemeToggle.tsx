import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {images} from '../../../../Assets/images';
import Stack from '../../../../Components/Stack';
import {useTheme} from '../../../ThemeModule/Components/ThemeContext';
import {styles} from './ThemeToggle.styles';

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
