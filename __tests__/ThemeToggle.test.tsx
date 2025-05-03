import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {TouchableOpacity, Image} from 'react-native';
import {images} from '../src/Assets/images';
import ThemeToggle from '../src/Module/WeatherModule/Components/ThemeToggle/ThemeToggle';
import {useTheme} from '../src/Module/ThemeModule/Components/ThemeContext';

jest.mock('../src/Module/ThemeModule/Components/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  it('renders correct icon and calls toggleTheme', () => {
    const toggleTheme = jest.fn();

    (useTheme as jest.Mock).mockReturnValue({
      theme: {
        type: 'light',
        colors: {
          surface: '#ffffff',
          background: '#dbd9d7',
          lightBackground: '#ffffff',
          text: '#000000',
          onSurface: '#000000',
        },
      },
      toggleTheme,
    });

    let component: renderer.ReactTestRenderer;

    act(() => {
      component = renderer.create(<ThemeToggle />);
    });

    const tree = component!.root;
    const image = tree.findByType(Image);
    expect(image.props.source).toBe(images.lightMode);

    act(() => {
      tree.findByType(TouchableOpacity).props.onPress();
    });

    expect(toggleTheme).toHaveBeenCalled();
  });
});
