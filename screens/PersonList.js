import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonList'
import PersonListView from '../components/PersonListView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'

class PersonList extends React.Component {

  static propTypes = {
    fetchPersonList: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    personList: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    successFetching: PropTypes.bool.isRequired,
    errorFetching: PropTypes.bool.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Personas',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
    },
  }

  componentDidMount() {
    this.props.fetchPersonList()
  }

  handlePress = (person) => {
    this.props.navigator.push('PersonDetail', {
      name: person.name,
      subtitle: person.subtitle,
    })
  }

  render() {
    return (
      <PersonListView
        colors={Colors}
        styles={Styles}
        list={this.props.personList}
        handlePress={this.handlePress}
        fetching={this.props.fetching}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    fetching: state.personList.fetching,
    successFetching: state.personList.successFetching,
    errorFetching: state.personList.errorFetching,
    personList: state.personList.list,
    error: state.personList.error,
  }
}

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(allActions, dispatch)
  return {
    fetchPersonList: actions.fetchPersonList,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonList)
