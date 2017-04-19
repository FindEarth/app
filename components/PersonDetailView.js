import React from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'

function PersonDetailView({styles, name, subtitle}) {
  return (
    <ScrollView
      style={styles.container}
    >
      <Text>{name}</Text>
      <Text>{subtitle}</Text>
    </ScrollView>
  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonDetailView
