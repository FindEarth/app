import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonDetail'
import HeaderTitle from '../components/HeaderTitle'
import PersonDetailView from '../components/PersonDetailView'
import { FontAwesome } from '@expo/vector-icons'

class PersonDetail extends React.Component {
  static route = {
    navigationBar: {
      title: 'Descripción',
      backgroundColor: Colors.white,
      borderBottomWidth: 1,
      tintColor: Colors.tintColor,
      renderTitle: (route) => (
        <HeaderTitle title={route.params.person.name} />
      ),
      renderRight: () => (
        <FontAwesome
          name={'share-alt'}
          size={18}
          color={Colors.tintColor}
          style={Styles.shareHeader}
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
