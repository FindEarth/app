import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 38,
    width: 38,
    marginTop: -3,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    marginLeft: 5,
    fontWeight: '500',
  },
})

export default styles
