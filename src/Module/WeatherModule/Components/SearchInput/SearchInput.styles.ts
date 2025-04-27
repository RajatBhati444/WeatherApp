import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    lineHeight: 16 * 1.2 - 1.4,
    textAlignVertical: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  searchButton: {
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
