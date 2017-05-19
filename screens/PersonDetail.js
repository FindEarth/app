import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonDetail'
import HeaderTitle from '../components/HeaderTitle'
import PersonDetailView from '../components/PersonDetailView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'

const rightIcon = {
  ios: 'ios-share-outline',
  android: 'md-share',
}

class PersonDetail extends React.Component {

  static propTypes = {
    personSelected: PropTypes.object.isRequired,
    refreshingPerson: PropTypes.bool.isRequired,
    errorRefreshingPerson: PropTypes.bool.isRequired,
    refreshPersonDetail: PropTypes.func.isRequired,
  }

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

  componentWillMount() {
    this.updateHeaderName()
  }

  componentWillReceiveProps() {
    this.updateHeaderName()
  }

  updateHeaderName = () => {
    const person = this.props.personSelected
    if (person) {
      this.props.route.params.person.name = person.name
    }
  }

  onRefreshPerson = () => {
    this.props.refreshPersonDetail()
  }

  render() {
    return (
      <PersonDetailView
        styles={Styles}
        person={this.props.personSelected}
        refreshingPerson={this.props.refreshingPerson}
        errorRefreshingPerson={this.props.errorRefreshingPerson}
        onRefreshPerson={this.onRefreshPerson}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    personSelected: state.personDetail.personSelected,
    refreshingPerson: state.personDetail.refreshingPerson,
    errorRefreshingPerson: state.personDetail.errorRefreshingPerson,
  }
}

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(allActions, dispatch)
  return {
    refreshPersonDetail: actions.refreshPersonDetail,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonDetail)
