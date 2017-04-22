import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const height = Layout.window.height - 260

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    marginBottom: 20,
    marginTop: -1,
  },
  errorContainer: {
    flex: 1,
    height,
    width: Layout.window.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: 8,
    color: Colors.gray,
    fontSize: 17,
    fontWeight: 'normal',
  },
  errorButton: {
    marginTop: 80,
    height: 40,
    width: 200,
  },
  userDistance: {
    marginLeft: 10,
    marginTop: 5,
    color: '#86939e',
  },
  userAddress: {
    marginLeft: 10,
    marginTop: 5,
    lineHeight: 20,
    color: '#86939e',
  },
})

export default styles
