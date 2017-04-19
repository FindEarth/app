import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/Config'
import ConfigView from '../components/ConfigView'

class Config extends React.Component {
  static navigationOptions = {
    title: 'GROUPON',
    header: {
      titleStyle: {
        color: 'white',
      },
      style: {
        backgroundColor: Colors.tintColor,
        elevation: 0,
      },
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
