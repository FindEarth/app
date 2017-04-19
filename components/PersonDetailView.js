import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

function PersonDetailView({styles}) {
  return (
    <ScrollView
      style={styles.container}
    />
  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonDetailView
