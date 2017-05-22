import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

function ConfigView({styles}) {
  return (
    <View style={styles.container} >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icons/app-icon.png')}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Find Hearth</Text>
          <Text style={styles.subtitle}>Alerta Solidaria</Text>
          <Text style={styles.version}>Versión 0.0.1</Text>
        </View>
      </View>
      <Text style={styles.row1}>Radio de Búsqueda</Text>
      <Text style={styles.row2}>Argentina</Text>
      <Text style={styles.row1}>Solicitar Información</Text>
      <Text style={styles.row2}>hi@keepe.rs</Text>
    </View>
  )
}

ConfigView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default ConfigView
