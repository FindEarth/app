import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

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
      <Text style={styles.row1}>Que es</Text>
      <Text style={styles.row2}>Es una plataforma open source, que tiene como
        objetivo facilitar el reporte de personas perdidas, agilizar
        la viralización de sus datos en redes sociales y lo más
        importante: ayudar a encontrarlas.
      </Text>
    </View>
  )
}

ConfigView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default pure(ConfigView)
