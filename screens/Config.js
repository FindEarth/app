import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/Config'
import HeaderTitle from '../components/HeaderTitle'
import ConfigView from '../components/ConfigView'

class Config extends React.PureComponent {
  static route = {
    navigationBar: {
      title: 'Información',
      backgroundColor: Colors.white,
      borderBottomWidth: 1,
      renderTitle: () => (
        <HeaderTitle title={'Información'} />
      ),
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
