import { StyleSheet, Dimensions } from 'react-native'
// import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  ios: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  android: {
    paddingTop: 200,
  },
})

export default styles
