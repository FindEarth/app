import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logo: {
    height: 72,
    width: 72,
    position: 'relative',
    bottom: 1,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    marginTop: 11,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.grey7,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: Colors.gray2,
  },
  version: {
    marginTop: 2,
    fontSize: 12,
    color: Colors.gray2,
  },
  row1: {
    padding: 10,
    backgroundColor: Colors.grey3,
    color: Colors.gray7,
    fontSize: 15,
  },
  row2: {
    padding: 10,
    color: Colors.gray2,
    fontSize: 15,
    lineHeight: 25,
  },
})

export default styles
