import React from 'react'
import {
  Platform,
  View,
  ActivityIndicator,
}  from 'react-native'
import Styles from '../styles/LoadingIndicator'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'

function ios(options) {
  return (
    <View style={options.style}>
      <ActivityIndicator size={options.size} />
    </View>
  )
}

function android(options) {
  return (
    <View backgroundColor={colors.white}>
      <ActivityIndicator
        style={options.style}
        size={options.size}
      />
    </View>
  )
}

function LoadingIndicator(
  androidOptions = { size: 40, style: Styles.android },
  iosOptions = { size: 'large', style: Styles.ios }
) {
  return Platform.OS === 'ios' ? ios(iosOptions) : android(androidOptions)
}

LoadingIndicator.propTypes = {
  android: PropTypes.object,
  ios: PropTypes.object,
}

export default LoadingIndicator
