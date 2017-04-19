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
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <PersonDetailView
        styles={Styles}
      />
    )
  }
}

export default PersonDetail
