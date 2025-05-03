import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  searchButton: {
    padding: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'grey',
  },
  windIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  themeIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  themeIcon: {
    height: 30,
    width: 30,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
