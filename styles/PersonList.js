import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const height = Layout.window.height - 260

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  search: {
    marginBottom: 10,
  },
  inputStyle: {
    backgroundColor: Colors.white,
  },
  list: {
    marginBottom: -2,
    marginTop: -1,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
    borderBottomWidth: 0,
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
  ListItemContent: {
    flexDirection: 'row',
  },
  arrowRight: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 5,
  },
  userDistance: {
    marginLeft: 10,
    marginTop: 5,
    color: Colors.gray2,
  },
  avatarStyle: {
    borderRadius: 34,
    height: 68,
    width: 68,
  },
  addressContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  userAddress: {
    lineHeight: 20,
    color: Colors.gray2,
  },
  userAddressIcon: {
    fontSize: 10,
    marginTop: 1,
  },
  androidSearchBarContainer: {
    backgroundColor: Colors.searchHomeBackground,
    borderColor: Colors.searchHomeBackground,
  },
})

export default styles
