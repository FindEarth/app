import { createRouter } from '@expo/ex-navigation'

import PeopleScreen from '../screens/PeopleScreen'
import AddPersonScreen from '../screens/AddPersonScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RootNavigation from './RootNavigation'

export default createRouter(() => ({
  people: () => PeopleScreen,
  addPerson: () => AddPersonScreen,
  profile: () => ProfileScreen,
  rootNavigation: () => RootNavigation,
}))
