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
    backgroundColor: Colors.grey3,
    paddingTop: 15,
    paddingBottom: 15,
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
    height: 257,
    marginRight: 15,
    marginLeft: 15,
  },
  titleName: {
    padding: 10,
    textAlign: 'center',
    color: Colors.darkGrey,
  },
})

export default styles
