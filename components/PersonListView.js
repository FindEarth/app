import React from 'react'
import { ScrollView, View, Platform } from 'react-native'
import { List, ListItem, Button, Text, SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'
import userM from '../assets/images/userM.png'
import userF from '../assets/images/userF.png'
import Search from 'react-native-search-box'
import Spinner from 'react-native-loading-spinner-overlay'

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

function userImg(user) {
  const noImgReplace = user.gender === 'M' ? userM : userF
  return user.photos.length > 0 ? user.photos[0].url : noImgReplace
}

function searchBar(styles) {
  return Platform.OS === 'ios' ?
    <Search
      backgroundColor={colors.searchHomeBackground}
      tintColorDelete={colors.gray}
      inputStyle={styles.inputStyle}
      placeholder={'Buscar'}
      cancelTitle={'Cerrar'}
      titleCancelColor={colors.white}
      style={styles.search}
    /> :
    <SearchBar
      containerStyle={{
        backgroundColor: colors.searchHomeBackground,
        borderColor: colors.searchHomeBackground,
      }}
      lightTheme
      inputStyle={styles.inputStyle}
      placeholder='Buscar'
    />
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
      { searchBar(styles) }
      <ScrollView style={styles.container}>
        { successFetching &&
          <List containerStyle={styles.list}>
            {
              list.map((user, i) => (
                <ListItem
                  roundAvatar
                  avatar={userImg(user)}
                  key={i}
                  title={user.name}
                  subtitle={
                    <View>
                      { user.distance &&
                        <Text style={styles.userDistance}>
                          {`◉ ${(user.distance.toFixed(1))} ㎞ `}
                        </Text>
                      }
                      <View style={styles.addressContainer}>
                        <Text style={styles.userAddressIcon}>🌎 </Text>
                        <Text style={styles.userAddress}>
                          {user.geo.address}
                        </Text>
                      </View>
                    </View>
                  }
                  onPress={() => handleListPress(user)}
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
