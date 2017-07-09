import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const width = Layout.window.width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 15,
  },
  pagination: {
    color: Colors.tabIconSelected,
    fontSize: 38,
  },
  fitImageWithSize: {
    height: 200,
    width,
  },
  swiper: {
    position: 'relative',
  },
  mapContainer: {
    borderColor: Colors.grey6,
  },
  map: {
    height: 260,
  },
  titleName: {
    padding: 15,
    color: Colors.darkGrey,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: Colors.white,
    fontWeight: '500',
    lineHeight: 23,
  },
  toasterContainer: {
    backgroundColor: Colors.gray,
    height: 30,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toasterText: {
    color: Colors.darkGray,
  },
})

export default styles
