import React from 'react';
import {ThemeProvider} from './Module/ThemeModule/Components/ThemeContext';
import Router from './Module/NavigationModule/Navigation/Router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
