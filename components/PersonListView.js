import React from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem, SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'

function PersonListView({colors, styles, list}) {
  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        placeholderTextColor={colors.tintColor}
        textColor={colors.tintColor}
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.searchBarInput}
        icon={{color: colors.tintColor}}
        clearButtonMode='always'
        placeholder='Buscar'
      />
      <ScrollView style={styles.container}>
        <List containerStyle={styles.list}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                subtitle={l.subtitle}
                title={l.name}
              />
            ))
          }
        </List>
      </ScrollView>
    </View>
  )
}

PersonListView.propTypes = {
  colors: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
}

export default PersonListView
