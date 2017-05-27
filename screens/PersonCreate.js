import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonCreate'
import HeaderTitle from '../components/HeaderTitle'
import PersonCreateView from '../components/PersonCreateView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'

class PersonCreate extends React.Component {

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

  render() {
    return (
      <PersonCreateView
        styles={Styles}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state,
  }
}

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(allActions, dispatch)
  return {
    actions: actions,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonCreate)
