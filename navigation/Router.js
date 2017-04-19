import { createRouter } from '@expo/ex-navigation'

import PersonList from '../screens/PersonList'
import PersonCreate from '../screens/PersonCreate'
import PersonDetail from '../screens/PersonDetail'
import Config from '../screens/Config'
import RootNavigation from './RootNavigation'

export default createRouter(() => ({
  PersonList: () => PersonList,
  PersonCreate: () => PersonCreate,
  PersonDetail: () => PersonDetail,
  Config: () => Config,
  rootNavigation: () => RootNavigation,
}))
