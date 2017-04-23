import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonDetail'
import PersonDetailView from '../components/PersonDetailView'

class PersonDetail extends React.Component {
  static route = {
    navigationBar: {
      title: 'Descripción',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
    },
  }

  render() {
    return (
      <PersonDetailView
        styles={Styles}
        person={this.props.route.params.person}
      />
    )
  }
}

export default PersonDetail
