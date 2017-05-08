import React from 'react'
import { ScrollView, View, Platform, RefreshControl } from 'react-native'
import { List, ListItem, Button, Text, SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'
import colors from '../constants/Colors'
import Search from 'react-native-search-box'
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/Ionicons'

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
  const noImgReplace = user.gender === 'M'
    ? require('../assets/images/userM.png')
    : require('../assets/images/userF.png')
  return user.photos.length > 0 ? user.photos[0].url : noImgReplace
}

function searchBar(styles) {
  return Platform.OS === 'ios' ?
    <Search
      backgroundColor={colors.searchHomeBackground}
      tintColorDelete={colors.searchHomeBackground}
      inputStyle={styles.inputStyle}
      placeholder={'Buscar'}
      cancelTitle={'Cerrar'}
      titleCancelColor={colors.white}
      style={styles.search}
    /> :
    <SearchBar
      containerStyle={styles.androidSearchBarContainer}
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
  refreshingList,
  onRefreshList,
}) {
  if(error) console.error(error)

  return (
    <View style={styles.container}>
      { searchBar(styles) }
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
          <List containerStyle={styles.list}>
            {
              list.map((user, i) => (
                <ListItem
                  roundAvatar
                  avatar={userImg(user)}
                  avatarStyle={styles.avatarStyle}
                  key={i}
                  title={user.name}
                  hideChevron
                  subtitle={
                    <View style={styles.ListItemContent}>
                      <View>
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
  refreshingList: PropTypes.bool.isRequired,
  onRefreshList: PropTypes.func.isRequired,
}

export default PersonListView
