import React from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem} from 'react-native-elements'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'
import userM from '../assets/images/userM.png'
import userF from '../assets/images/userF.png'
import Search from 'react-native-search-box'
import Spinner from 'react-native-loading-spinner-overlay'

let userImg = (gender) => gender === 'M' ? userM : userF

function PersonListView({styles, list, handlePress, fetching}) {
  return (
    <View style={styles.container}>
      <Search
        backgroundColor={colors.tintColor}
        tintColorDelete={colors.gray}
        placeholder={'Buscar'}
      />
      <ScrollView style={styles.container}>
        <List containerStyle={styles.list}>
          {
            list.map((l, i) => {
              const uri = l.photos.length > 0 ? l.photos[0].url : userImg(l.gender)
              return (
                <ListItem
                  roundAvatar
                  avatar={uri}
                  key={i}
                  subtitle={l.geo.address}
                  title={l.name}
                  onPress={() => handlePress(l)}
                />
              )
            })
          }
        </List>
        { fetching &&
          <Spinner
            visible={true}
            textContent={'Buscando...'}
            textStyle={styles.spinner}
            color={colors.tintColor}
            overlayColor={'rgba(0, 0, 0, 0)'}
          />
        }
      </ScrollView>
    </View>
  )
}

PersonListView.propTypes = {
  styles: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
}

export default PersonListView
