import { StackNavigator } from 'react-navigation'

import PersonList from '../screens/PersonList'
import PersonDetail from '../screens/PersonDetail'

export default StackNavigator({
  PersonList: {
    screen: PersonList,
    navigationOptions: {
      title: 'Personas',
    },
  },
  PersonDetail: {
    screen: PersonDetail,
    navigationOptions: {
      title: ({ state }) => `${state.params.name.toUpperCase()}`,
    },
  },
})
