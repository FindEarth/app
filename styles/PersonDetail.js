import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const width = Layout.window.width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 0,
    backgroundColor: Colors.white,
    marginTop: -2,
    borderTopWidth: 1,
    borderColor: Colors.grey4,
  },
  fitImageWithSize: {
    height: 380,
    width,
    marginTop: -2,
    marginBottom: -2,
  },
  listContainer: {
    marginTop: 0,
    borderTopColor: Colors.grey5,
    marginBottom: -2,
  },
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.grey4,
  },
  titleName: {
    fontWeight: '600',
  },
  titleHelp: {
    fontSize: 13,
    color: Colors.tabIconDefault,
    textAlign: 'center',
  },
})

export default styles
