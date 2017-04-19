import React from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'

function PersonCreateView({styles}) {
  return (
    <ScrollView style={styles.container}>
      <Text>Hola</Text>
    </ScrollView>
  )
}

PersonCreateView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonCreateView
