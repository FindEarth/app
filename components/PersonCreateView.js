import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

function PersonCreateView({styles}) {
  return (
    <ScrollView
      style={styles.container}
    />
  )
}

PersonCreateView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonCreateView
