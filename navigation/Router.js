import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import PersonListAndDetailStack from './PersonListAndDetailStack'
import PersonCreateStack from './PersonCreateStack'
import ConfigStack from './ConfigStack'

import Colors from '../constants/Colors'

export const Tabs = TabNavigator({
  PersonListAndDetailStack: {
    screen: PersonListAndDetailStack,
    navigationOptions: {
      tabBar: {
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
  },

  PersonCreateStack: {
    screen: PersonCreateStack,
    navigationOptions: {
      tabBar: {
        icon: ({ tintColor }) => {
          return <Icon name="playlist-add" size={35} color={tintColor} />
        },
      },
    },
  },

  Config: {
    screen: ConfigStack,
    navigationOptions: {
      tabBar: {
        icon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
      },
    },
  },
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    inactiveBackgroundColor: Colors.tintColor,
    activeBackgroundColor: Colors.tintColor,
    activeTintColor: Colors.tabIconSelected,
  },
})

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
})
