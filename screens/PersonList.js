import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonList'
import PersonListView from '../components/PersonListView'
import PersonListService from './../services/PersonList'

class PersonList extends React.Component {
  constructor() {
    super()
    this.PersonListService = new PersonListService()
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.PersonListService.fetchPeople()
      .then((people) => {
        this.setState({list: people})
      })
  }

  handlePress = (person) => {
    this.props.navigator.push('PersonDetail', {
      name: person.name,
      subtitle: person.subtitle,
    })
  }

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
      <PersonListView
        colors={Colors}
        styles={Styles}
        list={this.state.list}
        handlePress={this.handlePress}
      />
    )
  }
}

export default PersonList
