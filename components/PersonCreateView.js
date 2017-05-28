import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import Colors from './../constants/Colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import t from 'tcomb-form-native'
import dateFormat from 'date-fns/format'
import { email } from '../constants/Regex'
import { Text } from 'react-native'

const emailRegex = new RegExp(email)
const Form = t.form.Form
const Gender = t.refinement(t.String, (str) => str === 'M' || str === 'F')
const Age = t.refinement(t.Number, (num) => (num <= 120))
const Email = t.refinement(t.String, (str) => emailRegex.test(str))

const Person = t.struct({
  contactName: t.String,
  contactEmail: Email,
  contactNumber: t.Number,
  name: t.String,
  age: Age,
  gender: Gender,
  lastSeenAt: t.Date,
  clothing: t.maybe(t.String),
  appearance: t.maybe(t.String),
  more: t.maybe(t.String),
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
      label: 'Fecha última vez visto',
      config: {
        format: (date) => dateFormat(date, 'DD/MM/YYYY, h:mm a'),
      },
      maximumDate: new Date(),
      help: 'Seleccione la fecha para modificar',
    },
  },
}

const queryMap = {
  key: 'AIzaSyBFDFmn-PL1Kg0frwZUXibuFyuiTPDMsas',
  language: 'en',
}
const geocodingByTypes = [
  'locality',
  'administrative_area_level_3',
]

class PersonCreateView extends React.PureComponent {

  constructor () {
    super()
    this.state = {
      formValues: null,
      geo: null,
      geoError: false,
    }
  }

  static propTypes = {
    styles: PropTypes.object.isRequired,
  }

  onChange = (formValues) => {
    this.setState({
      ...this.state,
      formValues })
  }

  clearForm = () => {
    // clear content from all textbox
    this.setState({
      ...this.state,
      formValues: null,
      geo: null,
      geoError: false,
    })
  }

  handleSubmit = () => {
    let geo = this.state.geo
    let formValues = this.refs.form.getValue()
    if (formValues && geo) {
      console.log({...formValues, geo})
      this.clearForm()
    }
    if (!geo) {
      this.setState({
        ...this.state,
        geoError: true,
      })
    }
  }

  getgeo = (location) => {
    let vicinity = location.vicinity
    let address = location.name
    let loc = [
      location.geometry.location.lng,
      location.geometry.location.lat,
    ]
    let countryObj = location.address_components.find(
      (item) => item.types[0] === 'country'
    )
    let country = countryObj.long_name
    let countryCode = countryObj.short_name
    let administrativeLvl1 = location.address_components.find(
      (item) => item.types[0] === 'administrative_area_level_1'
    )
    let administrativeLvl2 = location.address_components.find(
      (item) => item.types[0] === 'administrative_area_level_2'
    )
    let city = `${administrativeLvl2.long_name}, ${administrativeLvl1.long_name}`
    let geo = {
      vicinity,
      address,
      loc,
      country,
      city,
      countryCode,
    }
    this.setState({
      ...this.state,
      geo,
    })
  }

  render() {
    return (
      <KeyboardAwareScrollView style={this.props.styles.container}>
        <Form
          type={Person}
          options={options}
          ref='form'
          value={this.state.formValues}
          onChange={this.onChange}
        />
        <Text style={{
          fontSize: 17,
          marginBottom: 8,
          fontWeight: '500',
          marginTop: 3,
          color: this.state.geoError ? Colors.darkRed : 'black',
        }}
        >
          Dirección última vez visto
        </Text>
        <GooglePlacesAutocomplete
          placeholder={'Dirección ultima vez visto'}
          minLength={2}
          autoFocus={false}
          listViewDisplayed={'auto'}
          fetchDetails={true}
          renderDescription={(row) => row.description}
          onPress={(data, details = null) => this.getgeo(details, data)}
          query={queryMap}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          filterReverseGeocodingByTypes={geocodingByTypes}
          debounce={200}
          styles={{
            container: {
              borderWidth: 1,
              borderColor: this.state.geoError ? Colors.darkRed : Colors.grey4,
              borderRadius: 4,
              marginBottom: 15,
            },
            textInputContainer: {
              backgroundColor: Colors.white,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderColor: Colors.white,
              borderRadius: 4,
              borderTopColor: Colors.white,
              borderBottomColor: Colors.white,
              height: 36,
            },
            textInput: {
              borderWidth: 0,
              borderColor: Colors.white,
              borderRadius: 4,
              fontSize: 17,
              marginTop: 4,
              marginLeft: 0,
            }}
          }
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
