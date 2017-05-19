import React from 'react'
import { Platform } from 'react-native'
import { Notifications } from 'expo'
import { StackNavigation, TabNavigation, TabNavigationItem } from '@expo/ex-navigation'
import styles from '../styles/RootNavigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Alerts from '../constants/Alerts'
import Colors from '../constants/Colors'
import registerForPushNotificationsAsync
  from '../pushNotifications/registerForPushNotificationsAsync'

export default class RootNavigation extends React.Component {
  componentDidMount() {
    //this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    //this._notificationSubscription && this._notificationSubscription.remove()
  }

  render() {
    return (
      <TabNavigation tabBarHeight={46}
        initialTab='PersonList'
        tabBarStyle={styles.tabNavigation}
      >
        <TabNavigationItem
          id='PersonList'
          renderIcon={isSelected => this._renderIcon('people', isSelected)}
        >
          <StackNavigation initialRoute='PersonList' />
        </TabNavigationItem>

        <TabNavigationItem
          id='PersonCreate'
          renderIcon={isSelected => this._renderIcon('person-add', isSelected)}
        >
          <StackNavigation initialRoute='PersonCreate' />
        </TabNavigationItem>

        <TabNavigationItem
          id='Config'
          renderIcon={isSelected => this._renderIcon('settings', isSelected)}
        >
          <StackNavigation initialRoute='Config' />
        </TabNavigationItem>
      </TabNavigation>
    )
  }

  _renderIcon(name, isSelected) {
    return Platform.OS === 'ios' ?
      <Icon
        name={isSelected ? `ios-${name}` : `ios-${name}-outline`}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      /> :
      <Icon
        name={`md-${name}`}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in
    // pushNotifications/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync()

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    )
  }

  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    )
  }
}
