import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonDetail'
import HeaderTitle from '../components/HeaderTitle'
import PersonDetailView from '../components/PersonDetailView'

const rightIcon = {
  ios: 'ios-share-outline',
  android: 'md-share',
}

class PersonDetail extends React.Component {
  static route = {
    navigationBar: {
      title: 'Descripción',
      backgroundColor: Colors.white,
      borderBottomWidth: 1,
      tintColor: Colors.tintColor,
      renderTitle: (route) => (
        <HeaderTitle
          title={route.params.person.name}
          rightIcon={rightIcon}
        />
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
