import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonCreate'
import HeaderTitle from '../components/HeaderTitle'
import PersonCreateView from '../components/PersonCreateView'

class PersonCreate extends React.Component {
  static route = {
    navigationBar: {
      title: 'Nuevo',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
      renderTitle: () => (
        <HeaderTitle title={'Crear'} />
      ),
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
