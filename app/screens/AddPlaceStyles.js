import { StyleSheet } from 'react-native';

const AddPlaceStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  placeInput: {
    flex: 1,
  },
  placeButton: {
    marginHorizontal: 15,
  },
  listContainer: {
    backgroundColor: 'red',
  },
  listStyle: { flex: 1, marginVertical: 5 },
});

export default AddPlaceStyles;
