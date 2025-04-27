import MMKVStorage from 'react-native-mmkv-storage';

// Initialize MMKV instance
const MMKV = new MMKVStorage.Loader().initialize();

// Adapter for redux-persist
const PStorage = {
  setItem: (key: string, value: string) => {
    MMKV.setString(key, value);
    return Promise.resolve();
  },
  getItem: (key: string) => {
    const value = MMKV.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    MMKV.removeItem(key);
    return Promise.resolve();
  },
};

export default PStorage;
