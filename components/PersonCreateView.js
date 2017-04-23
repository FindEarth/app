import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import Colors from './../constants/Colors'

function PersonCreateView({styles}) {
  return (
    <ScrollView
      style={styles.container}
    >
    <FormLabel>{'Tus Datos'}</FormLabel>
    <FormInput placeholder='Nombre' />
    <FormInput placeholder='Email' />
    <FormInput placeholder='Telefono' />
    <FormLabel>{'Datos de la persona perdida'}</FormLabel>
    <FormInput placeholder='Nombre' />
    <FormInput placeholder='Email' />
    <FormInput placeholder='Sexo' />
    <FormLabel>{'Ultima vez visto'}</FormLabel>
    <FormInput placeholder='MM/DD/YYYY' />
    <Button
      raised
      title='Enviar'
      backgroundColor={Colors.tintColor}
      color={Colors.white}
    />
    </ScrollView>
  )
}

PersonCreateView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonCreateView
