import { Dimensions } from 'react-native';

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 20,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#fff',
    width: '100%',
    paddingHorizontal: 10,
  },
  listItemContainer: {
    width: Dimensions.get('window').width,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
};
