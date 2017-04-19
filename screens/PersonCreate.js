import React from 'react'
import Styles from '../styles/PersonCreate'
import PersonCreateView from '../components/PersonCreateView'

class PersonCreate extends React.Component {
  render() {
    return (
      <PersonCreateView
        styles={Styles}
      />
    )
  }
}

export default PersonCreate
