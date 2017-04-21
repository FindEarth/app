import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'
import userM from '../assets/images/userM.png'
import userF from '../assets/images/userF.png'
import Search from 'react-native-search-box'
import Spinner from 'react-native-loading-spinner-overlay'

function userImg(user) {
  const noImgReplace = user.gender === 'M' ? userM : userF
  return user.photos.length > 0 ? user.photos[0].url : noImgReplace
}

const iconReloadOptions = {
  name: 'repeat',
  type: 'font-awesome',
  size: 35,
  style: {
    color: colors.gray,
    position: 'relative',
    left: 5,
  },
}

function PersonListView({
  styles,
  list,
  handleListPress,
  handleErrorPress,
  fetching,
  successFetching,
  errorFetching,
  error,
}) {
  if(error) console.error(error)

  return (
    <View style={styles.container}>
      <Search
        backgroundColor={colors.tintColor}
        tintColorDelete={colors.gray}
        placeholder={'Buscar'}
        cancelTitle={'Cerrar'}
      />
      <ScrollView style={styles.container}>
        { successFetching &&
          <List containerStyle={styles.list}>
            {
              list.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={userImg(l)}
                  key={i}
                  subtitle={l.geo.address}
                  title={l.name}
                  onPress={() => handleListPress(l)}
                />
              ))
            }
          </List>
        }
        <Spinner
          visible={fetching}
          color={colors.tintColor}
          overlayColor={colors.transparent}
        />
        { errorFetching &&
          <View style={styles.errorContainer}>
            <Button
              icon={iconReloadOptions}
              backgroundColor={colors.transparent}
              buttonStyle={styles.errorButton}
              onPress={handleErrorPress}
            />
            <Text style={styles.errorText}>
              Recargar
            </Text>
          </View>
        }
      </ScrollView>
    </View>
  )
}

PersonListView.propTypes = {
  styles: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  handleListPress: PropTypes.func.isRequired,
  handleErrorPress: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  successFetching: PropTypes.bool.isRequired,
  errorFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default PersonListView
