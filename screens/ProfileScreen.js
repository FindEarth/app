import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}
