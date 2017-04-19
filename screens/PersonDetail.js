import React from 'react'
import Styles from '../styles/PersonDetail'
import PersonDetailView from '../components/PersonDetailView'

class PersonDetail extends React.Component {
  render() {
    const { name } = this.props.navigation.state.params
    return (
      <PersonDetailView
        styles={Styles}
        name={name}
      />
    )
  }
}

export default PersonDetail
