import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonCreate'
import HeaderTitle from '../components/HeaderTitle'
import PersonCreateView from '../components/PersonCreateView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'

class PersonCreate extends React.Component {

  static propTypes = {
    createPerson: PropTypes.func.isRequired,
    cleanPersonCreateResponse: PropTypes.func.isRequired,
    creatingPerson: PropTypes.bool.isRequired,
    errorCreatingPerson: PropTypes.bool.isRequired,
    successCreatingPerson: PropTypes.bool.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Nuevo',
      backgroundColor: Colors.white,
      borderBottomWidth: 1,
      renderTitle: () => (
        <HeaderTitle title={'Crear'} />
      ),
    },
  }

  createPerson = (person) => {
    this.props.createPerson(person)
  }

  cleanPersonCreateResponse = () => {
    this.props.cleanPersonCreateResponse()
  }

  render() {
    return (
      <PersonCreateView
        styles={Styles}
        creatingPerson={this.props.creatingPerson}
        errorCreatingPerson={this.props.errorCreatingPerson}
        successCreatingPerson={this.props.successCreatingPerson}
        createPerson={this.createPerson}
        cleanPersonCreateResponse={this.cleanPersonCreateResponse}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    creatingPerson: state.personCreate.creatingPerson,
    errorCreatingPerson: state.personCreate.errorCreatingPerson,
    successCreatingPerson: state.personCreate.successCreatingPerson,
  }
}

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(allActions, dispatch)
  return {
    createPerson: actions.createPerson,
    cleanPersonCreateResponse: actions.cleanPersonCreateResponse,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonCreate)
