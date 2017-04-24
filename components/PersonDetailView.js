import React from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'


function PersonDetailView({styles, person}) {
  const requireImage = () => person.gender === 'M'
      ? require('../assets/images/userM.png')
      : require('../assets/images/userF.png')

  const image = person.photos.length ? { uri: person.photos[0].url } : requireImage()

  return (
    <ScrollView style={styles.container}>
      <Card title={person.name} image={image}>
        <Text style={{marginBottom: 10}}>
          {person.name} desaparecio el {person.lastSeenAt} en {person.geo.city}
        </Text>
        <Text style={{marginBottom: 10}}>
          Descripción:
        </Text>
        <Text style={{marginBottom: 10}}>
          Vestimenta: {person.description && person.description.clothing}
        </Text>
        <Text style={{marginBottom: 10}}>
          Apariencia: {person.description && person.description.appearance}
        </Text>
        <Text style={{marginBottom: 10}}>
          Mas Informacion: {person.description && person.description.more}
        </Text>
      </Card>
    </ScrollView>
  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonDetailView
