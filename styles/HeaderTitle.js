import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
  },
  logo: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 17,
    color: Colors.tintColor,
    marginLeft: 5,
    fontWeight: '500',
  },
})

export default styles
