import {
  Action,
  Middleware,
  ThunkAction,
  configureStore,
  createSelector,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import {rootReducer} from './useLazyLoadedSlices';
import apiService from './apiService';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import PStorage from '../Utils/Storage';

export type RootState = ReturnType<typeof rootReducer>;

const middlewares: Middleware<{}, RootState>[] = [apiService.middleware];

const persistConfig = {
  key: 'root',
  storage: PStorage,
  whitelist: ['placeWeather'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }).concat(middlewares),
    preloadedState: preloadedState as RootState & PersistPartial,
  });

  setupListeners(store.dispatch);
  return store;
};

const store = makeStore();

// Infer the type of `store`
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
export type AppAction<R = Promise<void>> =
  | Action<string>
  | ThunkAction<R, RootState, unknown, Action<string>>;

export const createAppSelector = createSelector.withTypes<RootState>();

const persistor = persistStore(store);
export {store, persistor};
