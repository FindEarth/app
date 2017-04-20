import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonList'
import PersonListView from '../components/PersonListView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class PersonList extends React.Component {

  static propTypes = {
  }

  static route = {
    navigationBar: {
      title: 'Personas',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
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
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonList)
