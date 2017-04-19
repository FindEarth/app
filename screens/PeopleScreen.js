import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import Colors from '../constants/Colors'

import { SearchBar, List, ListItem } from 'react-native-elements'
import PeopleService from './../services/PeopleService'

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
    color: Colors.tintColor,
    backgroundColor: '#fff',
  },
})


export default class PeopleScreen extends React.Component {

  constructor(props) {
    super(props)
    this.PeopleService = new PeopleService()
    this.state = {
      waitingFirstCall: true,
      refreshing: false,
      people: [],
    }
  }

  static route = {
    navigationBar: {
      title: 'People',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
    },
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.PeopleService.fetchPeople()
      .then((people) => {
        this.setState({people: people})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholderTextColor={Colors.tintColor}
          textColor={Colors.tintColor}
          containerStyle={styles.searchBarContainer}
          inputStyle={styles.searchBarInput}
          icon={{color: Colors.tintColor}}
          clearButtonMode='always'
          placeholder='Buscar'
        />

        <ScrollView style={styles.container}>
          <List containerStyle={styles.list}>
            {
              this.state.people.map((l, i) => (
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
