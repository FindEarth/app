import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import PersonList from '../screens/PersonList'
import PersonDetail from '../screens/PersonDetail'
import PersonCreate from '../screens/PersonCreate'
import Config from '../screens/Config'

import Colors from '../constants/Colors'

export const PersonStack = StackNavigator({
  PersonList: {
    screen: PersonList,
    navigationOptions: {
      title: 'Personas',
      tintColor: Colors.tintColor,
      backgroundColor: Colors.tintColor,
    },
  },
  PersonDetail: {
    screen: PersonDetail,
    navigationOptions: {
      title: ({ state }) => `${state.params.name.toUpperCase()}`,
    },
  },
})

export const Tabs = TabNavigator({
  PersonStack: {
    screen: PersonStack,
    navigationOptions: {
      tabBar: {
        label: 'Personas',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
  },
  PersonCreate: {
    screen: PersonCreate,
    navigationOptions: {
      headerVisible: true,
      title: 'Crear',
      tabBar: {
        label: 'Crear',
        icon: ({ tintColor }) => {
          return <Icon name="playlist-add" size={35} color={tintColor} />
        },
      },
    },
  },
  Config: {
    screen: Config,
    navigationOptions: {
      title: 'Config',
      tabBar: {
        label: 'Configuracion',
        icon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
      },
    },
  },
}, {
  tabBarOptions: {
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
