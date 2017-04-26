import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements'
import Colors from './../constants/Colors'

function PersonCreateView({styles}) {
  return (
    <ScrollView style={styles.container}>

      <FormLabel>{'Tus Datos'}</FormLabel>

      <FormInput
        placeholder={'Nombre'}
        autoCapitalize={'words'}
        autoFocus={true}
        autoCorrect={false}
      />

      <FormInput
        placeholder={'Email'}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'email-address'}
      />

      <FormInput
        placeholder={'Telefono'}
        autoCorrect={false}
        keyboardType={'phone-pad'}
      />

      <FormLabel>{'Datos de la persona perdida'}</FormLabel>

      <FormInput
        placeholder={'Nombre'}
        autoCapitalize={'words'}
        autoFocus={true}
        autoCorrect={false}
      />

      <FormInput
        placeholder={'Edad'}
        keyboardType={'numeric'}
      />

      <FormLabel>{'Sexo'}</FormLabel>
      <CheckBox
        center
        title='F'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
      />
      <CheckBox
        center
        title='M'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
      />

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
