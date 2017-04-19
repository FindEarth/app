import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonCreate'
import PersonCreateView from '../components/PersonCreateView'

class PersonCreate extends React.Component {
  static route = {
    navigationBar: {
      title: 'Nuevo',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <PersonCreateView
        styles={Styles}
      />
    )
  }
}

export default PersonCreate
