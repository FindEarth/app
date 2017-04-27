import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import FitImage from 'react-native-fit-image'
import { List, ListItem } from 'react-native-elements'
import format from 'date-fns/format'
import MapView from 'react-native-maps'
import Swiper from 'react-native-swiper'
import Colors from '../constants/Colors'

const uriImage = (url) => ({ uri: url })
const requireImage = (gender) => gender === 'M'
  ? require('../assets/images/userM.png')
  : require('../assets/images/userF.png')

function PersonDetailView({ styles, person }) {

  const geoMap = {
    longitude: person.geo.loc[0],
    latitude: person.geo.loc[1],
    latitudeDelta: 0.0600,
    longitudeDelta: 0.0250,
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        { !person.photos.length &&
          <FitImage
            resizeMode={'contain'}
            source={requireImage(person.gender)}
            style={styles.fitImageWithSize}
          />
        }
        { !!person.photos.length &&
          <Swiper
            style={styles.swiper}
            height={200}
            dotColor={Colors.white}
            activeDotColor={Colors.tabIconSelected}
            nextButton={<Text style={styles.pagination}>›</Text>}
            prevButton={<Text style={styles.pagination}>‹</Text>}
            showsButtons={person.photos.length > 1}
          >
            {
              person.photos.map((photo) => (
                <FitImage
                  resizeMode={'contain'}
                  source={uriImage(photo.url)}
                  style={styles.fitImageWithSize}
                  key={photo._id}
                />
              ))
            }
          </Swiper>
        }
      </View>
      <List containerStyle={styles.listContainer}>
        <ListItem
          title={
            `${person.name} se perdió el ${format(person.lastSeenAt, 'MM/DD/YYYY')}` +
            ` en ${person.geo.address}`
          }
          hideChevron={true}
          titleStyle={styles.titleName}
          subtitle={
            <MapView
              style={styles.map}
              initialRegion={geoMap}
            >
              <MapView.Marker coordinate={geoMap} />
              <MapView.Circle
                center={geoMap}
                radius={1000}
              />
            </MapView>
          }
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
    </ScrollView>

  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
}

export default PersonDetailView
