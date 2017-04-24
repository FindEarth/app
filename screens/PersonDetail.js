import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonDetail'
import HeaderTitle from '../components/HeaderTitle'
import PersonDetailView from '../components/PersonDetailView'

class PersonDetail extends React.Component {
  static route = {
    navigationBar: {
      title: 'Descripción',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
      renderTitle: (route) => (
        <HeaderTitle title={route.params.name} />
      ),
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
