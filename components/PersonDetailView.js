import React from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import FitImage from 'react-native-fit-image'
import { List, ListItem } from 'react-native-elements'
import format from 'date-fns/format'

function PersonDetailView({styles, person}) {
  const requireImage = () => person.gender === 'M'
      ? require('../assets/images/userM.png')
      : require('../assets/images/userF.png')

  const image = person.photos.length ? { uri: person.photos[0].url } : requireImage()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <FitImage
          resizeMode={'contain'}
          source={image}
          style={styles.fitImageWithSize}
        />
      </View>
      <List containerStyle={styles.listContainer}>
        <ListItem
          title={
            `${person.name} desaparecio el ${format(person.lastSeenAt, 'MM/DD/YYYY')}` +
            ` en ${person.geo.address}`
          }
          hideChevron={true}
          titleStyle={styles.titleName}
        />
        { person.description && person.description.clothing &&
          <ListItem
            title={'Vestimenta'}
            subtitle={person.description.clothing}
            hideChevron={true}
          />
        }
        { person.description && person.description.appearance &&
          <ListItem
            title={'Apariencia'}
            subtitle={person.description.appearance}
            hideChevron={true}
          />
        }
        { person.description && person.description.more &&
          <ListItem
            title={'Mas Información'}
            subtitle={person.description.more}
            hideChevron={true}
          />
        }
      </List>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>

  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default PersonDetailView
