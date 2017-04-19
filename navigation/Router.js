import { createRouter } from '@expo/ex-navigation'

import PersonList from '../screens/PersonList'
import PersonCreate from '../screens/PersonCreate'
import Config from '../screens/Config'
import RootNavigation from './RootNavigation'

export default createRouter(() => ({
  home: () => PersonList,
  links: () => PersonCreate,
  settings: () => Config,
  rootNavigation: () => RootNavigation,
}))
