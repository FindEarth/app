import React from 'react'
import {
  Platform,
  View,
  ActivityIndicator,
}  from 'react-native'
import styles from '../styles/LoadingIndicator'
// import PropTypes from 'prop-types'

const activityIndicatorSize = 40
const activityIndicatorPaddingTop = 200

function ios() {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

function android() {
  return (
    <View backgroundColor={'#FFFFFF'}>
      <ActivityIndicator
        style={{paddingTop: activityIndicatorPaddingTop}}
        size={activityIndicatorSize}
      />
    </View>
  )
}

function LoadingIndicator() {
  return Platform.OS === 'ios' ? ios() : android()
}

// LoadingIndicator.propTypes = {
// }

export default LoadingIndicator
