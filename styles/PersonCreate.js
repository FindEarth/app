import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },
  form: {
    padding: 15,
  },
  sendButton: {
    marginBottom: 30,
    marginTop: 15,
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
