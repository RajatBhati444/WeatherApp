import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import LineItem from '../src/Module/WeatherModule/Components/LineItem/LineItem';
import {ThemeProvider} from '../src/Module/ThemeModule/Components/ThemeContext';

test('LineItem renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    const tree = ReactTestRenderer.create(
      <ThemeProvider>
        <LineItem title="Test title" value="4 kph" />
      </ThemeProvider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
