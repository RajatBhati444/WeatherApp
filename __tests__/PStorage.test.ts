import PStorage from '../src/Utils/Storage'; // adjust path if needed

jest.mock('react-native-mmkv-storage', () => {
  return {
    Loader: jest.fn().mockImplementation(() => ({
      initialize: jest.fn(() => ({
        setString: jest.fn(),
        getString: jest.fn(() => 'mockedValue'),
        removeItem: jest.fn(),
      })),
    })),
  };
});

describe('PStorage Adapter', () => {
  it('should set an item', async () => {
    await expect(PStorage.setItem('key', 'value')).resolves.toBeUndefined();
  });

  it('should get an item', async () => {
    const value = await PStorage.getItem('key');
    expect(value).toBe('mockedValue');
  });

  it('should remove an item', async () => {
    await expect(PStorage.removeItem('key')).resolves.toBeUndefined();
  });
});
