import React from 'react'
import { Platform,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
}  from 'react-native'

const styles = StyleSheet.create({
  indicatorContainer: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const activityIndicatorSize = 40
const activityIndicatorPaddingTop = 200

export class Loading extends React.Component {
  render() {
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )
    }
    return (
      <View backgroundColor={'#FFFFFF'}>
          <ActivityIndicator
            style={{paddingTop: activityIndicatorPaddingTop}}
            size={activityIndicatorSize}
          />
      </View>
    )
  }
}
