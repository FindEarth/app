import React from 'react'
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
} from 'react-native'
import PropTypes from 'prop-types'
import FitImage from 'react-native-fit-image'
import format from 'date-fns/format'
import MapView from 'react-native-maps'
import Swiper from 'react-native-swiper'
import Colors from '../constants/Colors'
import colors from '../constants/Colors'
import Toaster from 'react-native-toaster'
import pure from 'recompose/pure'

const uriImage = (url) => ({ uri: url })
const requireImage = (gender) => gender === 'M'
  ? require('../assets/images/userM.png')
  : require('../assets/images/userF.png')

function PersonDetailView({
  styles,
  person,
  refreshingPerson,
  onRefreshPerson,
  errorRefreshingPerson,
}) {

  const geoMap = {
    longitude: person.geo.loc[0],
    latitude: person.geo.loc[1],
    latitudeDelta: 0.0600,
    longitudeDelta: 0.0250,
  }

  const toasterOpt = {
    text: 'Error de conección intente de nuevo',
    styles: {
      container: styles.toasterContainer,
      text: styles.toasterText,
    },
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshingPerson}
          onRefresh={onRefreshPerson}
          tintColor={colors.grey4}
          colors={[colors.tintColor]}
        />
      }
    >
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
        { errorRefreshingPerson &&
          <Toaster message={toasterOpt} duration={5500} />
        }
      </View>
      <View style={styles.mapContainer}>
        <Text style={styles.titleName}>
          {`${person.name} se perdió el ${format(person.lastSeenAt, 'DD/MM/YYYY, h:mm a')}` +
          ` en ${person.geo.address}`}
        </Text>
        <MapView
          style={styles.map}
          initialRegion={geoMap}
        >
          <MapView.Marker
            coordinate={geoMap}
            description={person.geo.address}
            title={'Dirección'}
          />
          <MapView.Circle
            center={geoMap}
            radius={1000}
            strokeColor={Colors.tabIconSelected}
          />
        </MapView>
      </View>
      { person.description &&
        <Text style={styles.titleName}>
          {person.description.clothing && `${person.description.clothing} `}
          {person.description.appearance && `${person.description.appearance} `}
          {person.description.more && `${person.description.more}`}
        </Text>
      }
    </ScrollView>
  )
}

PersonDetailView.propTypes = {
  styles: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
  errorRefreshingPerson: PropTypes.bool.isRequired,
  refreshingPerson: PropTypes.bool.isRequired,
  onRefreshPerson: PropTypes.func.isRequired,
}

export default pure(PersonDetailView)
