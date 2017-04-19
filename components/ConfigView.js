import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

function ConfigView({styles}) {
  return (
    <ScrollView
      style={styles.container}
    />
  )
}

ConfigView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default ConfigView
