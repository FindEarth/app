import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import Colors from '../constants/Colors'

import { SearchBar } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Camila Cinalli',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vicente Lopez',
  },
  {
    name: 'Araceli Fulles',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'San Martin',
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: -1,
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  searchBarContainer: {
    backgroundColor: Colors.tintColor,
    borderTopWidth: 0,
  },
  searchBarInput: {
    backgroundColor: '#fff',
  },
})

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Personas',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholderTextColor={Colors.tintColor}
          containerStyle={styles.searchBarContainer}
          inputStyle={styles.searchBarInput}
          icon={{color: Colors.tintColor}}
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
}
