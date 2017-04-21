import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/Config'
import ConfigView from '../components/ConfigView'

class Config extends React.Component {
  static route = {
    navigationBar: {
      title: 'Opciones',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
    },
  }

  render() {
    return (
      <ConfigView
        styles={Styles}
      />
    )
  }
}

export default Config
