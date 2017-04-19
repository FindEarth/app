import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: -1,
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  searchBarContainer: {
    backgroundColor: Colors.tintColor,
    borderTopWidth: 0,
  },
  searchBarInput: {
    color: Colors.tintColor,
    backgroundColor: '#fff',
  },
})

export default styles
