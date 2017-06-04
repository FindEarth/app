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
  container2: {
    flex: 1,
  },
  form: {
    padding: 15,
  },
  sendButton: {
    marginBottom: 25,
    marginTop: 15,
  },
  geoTextError: {
    fontSize: 14,
    marginTop: -8,
    marginBottom: 10,
    color: Colors.darkRed,
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.white,
  },
  successText: {
    color: Colors.darkRed,
    margin:  10,
    fontSize: 16,
  },
  errorText: {
    textAlign: 'center',
    color: Colors.successBackground,
    margin:  10,
  },
})

export default styles
