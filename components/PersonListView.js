import React from 'react'
import {
  ScrollView,
  View,
  Platform,
  RefreshControl,
  TouchableHighlight,
} from 'react-native'
import { List, ListItem, Text, SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'
import Search from 'react-native-search-box'
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/Ionicons'
import Toaster from 'react-native-toaster'
import FitImage from 'react-native-fit-image'
import pure from 'recompose/pure'

const uriImage = (url) => ({ uri: url })
const requireImage = (gender) => gender === 'M'
  ? require('../assets/images/userM.png')
  : require('../assets/images/userF.png')

function searchBar(styles, onSearchIosPersonList, clearFilterPersonList) {
  const andoidClearIcon = {
    color: colors.gray2,
    style: styles.andoidClearIcon,
  }

  return Platform.OS === 'ios' ?
    <Search
      backgroundColor={colors.searchHomeBackground}
      tintColorDelete={colors.searchHomeBackground}
      inputStyle={styles.inputStyle}
      placeholder={'Buscar'}
      cancelTitle={'Cerrar'}
      titleCancelColor={colors.white}
      style={styles.search}
      onChangeText={(txt) => onSearchIosPersonList(txt)}
      onCancel={clearFilterPersonList}
      onDelete={clearFilterPersonList}
      autoCorrect={false}
      autoCapitalize={'none'}
    /> :
    <SearchBar
      containerStyle={styles.androidSearchBarContainer}
      lightTheme
      clearIcon={andoidClearIcon}
      textInputRef={'searchBar'}
      inputStyle={styles.inputStyle}
      placeholder='Buscar'
      onChangeText={(txt) => onSearchIosPersonList(txt)}
      autoCorrect={false}
      autoCapitalize={'none'}
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
  refreshingList,
  onRefreshList,
  onSearchIosPersonList,
  errorRefreshing,
  clearFilterPersonList,
}) {
  const toasterOpt = {
    text: 'Error de conección intente de nuevo',
    styles: {
      container: styles.toasterContainer,
      text: styles.toasterText,
    },
  }

  return (
    <View style={styles.container}>
      { errorRefreshing &&
        <Toaster message={toasterOpt} duration={1500} />
      }
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshingList}
            onRefresh={onRefreshList}
            tintColor={colors.grey4}
            colors={[colors.tintColor]}
          />
        }
      >
        { successFetching &&
          <View>
          { searchBar(styles, onSearchIosPersonList, clearFilterPersonList) }
          <List containerStyle={styles.list}>
            {
              list.map((user, i) => (
                <ListItem
                  key={i}
                  hideChevron
                  subtitle={
                    <View style={styles.ListItemContent}>
                      <View>
                        <FitImage
                          source={ !!user.photos.length ?
                            uriImage(user.photos[0].url) : requireImage(user.gender)}
                          style={styles.avatarStyle}
                        />
                      </View>
                      <View style={styles.descriptionLeft}>
                        <Text style={styles.userTitle}>
                          {user.name}
                        </Text>
                        { user.distance &&
                          <Text style={styles.userDistance}>
                            {`◉ ${(user.distance.toFixed(1))} Km `}
                          </Text>
                        }
                        <View style={styles.addressContainer}>
                          <Text style={styles.userAddressIcon}>🌎 </Text>
                          <Text style={styles.userAddress}>
                            {`${user.geo.city} ${user.geo.country} `}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.arrowRight}>
                        <Icon
                          name={Platform.OS === 'ios' ?
                            'ios-arrow-forward' : 'md-arrow-forward'
                          }
                          size={28}
                          color={colors.tabIconDefault}
                        />
                      </View>
                    </View>
                  }
                  onPress={() => handleListPress(user)}
                />
              ))
            }
            { !list.length &&
              <Text style={styles.noFoundListText}>
                Su Búsqueda no coincide asegurese que no contenga errores
              </Text>
            }
          </List>
          </View>
        }
        <Spinner
          visible={fetching}
          color={colors.darkGrey}
          overlayColor={colors.transparent}
        />
        { errorFetching &&
          <View style={styles.errorContainer}>
            <TouchableHighlight
              onPress={handleErrorPress}
              underlayColor={colors.white}
              activeOpacity={0.7}
            >
              <View style={styles.errorIconContainer}>
                <Icon
                  name={'ios-refresh-outline'}
                  size={48}
                  color={colors.gray}
                />
                <Text style={styles.errorText}>
                  Recargar
                </Text>
              </View>
            </TouchableHighlight>
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
  refreshingList: PropTypes.bool.isRequired,
  onRefreshList: PropTypes.func.isRequired,
  onSearchIosPersonList: PropTypes.func.isRequired,
  errorRefreshing: PropTypes.bool.isRequired,
  clearFilterPersonList: PropTypes.func.isRequired,
}

export default pure(PersonListView)
