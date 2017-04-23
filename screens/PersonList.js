import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonList'
import PersonListView from '../components/PersonListView'
import { Location, Permissions } from 'expo'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'

class PersonList extends React.Component {

  static propTypes = {
    fetchPersonList: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    personList: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    successFetching: PropTypes.bool.isRequired,
    errorFetching: PropTypes.bool.isRequired,
    locationDenied: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Personas',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: Colors.white,
    },
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        })
        this.props.setLocation(location)
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.fetchPersonList(this.props.locationDenied && {
        long: this.props.location.coords.longitude,
        lat: this.props.location.coords.latitude,
      })
    }
  }

  fetchPersonList = (location) => {
    this.props.fetchPersonList(location)
  }

  handleListPress = (person) => {
    this.props.navigator.push('PersonDetail', { person })
  }

  render() {
    return (
      <PersonListView
        colors={Colors}
        styles={Styles}
        list={this.props.personList}
        handleListPress={this.handleListPress}
        handleErrorPress={this.fetchPersonList}
        fetching={this.props.fetching}
        successFetching={this.props.successFetching}
        errorFetching={this.props.errorFetching}
        error={this.props.error}
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
    locationDenied: state.personList.locationDenied,
    location: state.personList.location,
  }
}

function mapDispatchToProps (dispatch) {
  const actions = bindActionCreators(allActions, dispatch)
  return {
    fetchPersonList: actions.fetchPersonList,
    setLocation: actions.setLocation,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonList)
