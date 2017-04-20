import { StyleSheet, Dimensions } from 'react-native'
// import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  indicatorContainer: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
