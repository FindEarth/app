import React from 'react'
import { StyleSheet } from 'react-native'
import { Notifications } from 'expo'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Alerts from '../constants/Alerts'
import Colors from '../constants/Colors'
import registerForPushNotificationsAsync
  from '../pushNotifications/registerForPushNotificationsAsync'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
  tabNavigation: {
    backgroundColor: Colors.tintColor,
  },
})

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  render() {
    return (
      <TabNavigation tabBarHeight={46}
          initialTab='PersonList'
          tabBarStyle={styles.tabNavigation}
      >
        <TabNavigationItem
          id='PersonList'
          renderIcon={isSelected => this._renderIcon('users', isSelected)}
        >
          <StackNavigation initialRoute='PersonList' />
        </TabNavigationItem>

        <TabNavigationItem
          id='PersonCreate'
          renderIcon={isSelected => this._renderIcon('user-plus', isSelected)}
        >
          <StackNavigation initialRoute='PersonCreate' />
        </TabNavigationItem>

        <TabNavigationItem
          id='Config'
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}
        >
          <StackNavigation initialRoute='Config' />
        </TabNavigationItem>
      </TabNavigation>
    )
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={22}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
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
