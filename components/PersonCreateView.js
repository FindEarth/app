import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import Colors from './../constants/Colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'
import dateFormat from 'date-fns/format'
import { email } from '../constants/Regex'

const emailRegex = new RegExp(email)
const Form = t.form.Form
const Gender = t.refinement(t.String, (str) => str === 'M' || str === 'F')
const Age = t.refinement(t.Number, (num) => (num <= 120))
const Email = t.refinement(t.Number, (str) => emailRegex.test(str))

const Person = t.struct({
  contactName: t.String,
  contactEmail: Email,
  contactNumber: t.Number,
  name: t.String,
  age: Age,
  gender: Gender,
  clothing: t.maybe(t.String),
  appearance: t.maybe(t.String),
  more: t.maybe(t.String),
  lastSeenAt: t.Date,
})
const options = {
  auto: 'none',
  i18n: {
    optional: ' (opcional)',
    required: 'Requerido',
    add: 'Agregar',   // add button
    remove: '✘',  // remove button
    up: '↑',      // move up button
    down: '↓',     // move down button
  },
  fields: {
    contactName: {
      label: 'Datos personales',
      placeholder: 'Nombre',
      autoCorrect: false,
      autoCapitalize: 'words',
    },
    contactEmail: {
      placeholder: 'Email (Opcional)',
      autoCorrect: false,
      autoCapitalize: 'none',
      keyboardType: 'email-address',
    },
    contactNumber: {
      placeholder: 'Número de Teléfono',
      autoCorrect: false,
      autoCapitalize: 'none',
      keyboardType: 'phone-pad',
    },
    name: {
      label: 'Datos de persona perdida',
      placeholder: 'Nombre',
      autoCorrect: false,
      autoCapitalize: 'words',
    },
    age: {
      placeholder: 'Edad',
      autoCorrect: false,
      autoCapitalize: 'none',
      keyboardType: 'numeric',
    },
    gender: {
      placeholder: 'Género M o F',
      autoCorrect: false,
      autoCapitalize: 'words',
    },
    clothing: {
      label: 'Descripción',
      placeholder: 'Vestimenta (Opcional)',
      autoCorrect: true,
      autoCapitalize: 'none',
    },
    appearance: {
      placeholder: 'Apariencia (Opcional)',
      autoCorrect: true,
      autoCapitalize: 'none',
    },
    more: {
      placeholder: 'Otro dato relevante (Opcional)',
      autoCorrect: true,
      autoCapitalize: 'none',
    },
    lastSeenAt: {
      label: 'Ultima vez visto',
      config: {
        format: (date) => dateFormat(date, 'DD/MM/YYYY, h:mm a'),
      },
      maximumDate: new Date(),
      help: 'Seleccione la fecha para modificar',
    },
  },
}

class PersonCreateView extends React.PureComponent {

  static propTypes = {
    styles: PropTypes.object.isRequired,
  }

  state = {
    value: null,
  }

  onChange = (value) => {
    this.setState({ value })
  }

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null })
  }

  handleSubmit = () => {
    let value = this.refs.form.getValue()
    if (value) {           // if validation fails, value will be null
      console.log(value)  // value here is an instance of Person
      this.clearForm()    // clear all fields after submit
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={this.props.styles.container}>
        <Form
          type={Person}
          options={options}
          ref='form'
          value={this.state.value}
          onChange={this.onChange}
        />
        <Button
          raised
          title='Enviar'
          backgroundColor={Colors.tintColor}
          color={Colors.white}
          containerViewStyle={this.props.styles.sendButton}
          onPress={this.handleSubmit}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default PersonCreateView
