import { StackNavigator } from 'react-navigation'

import PersonCreate from '../screens/PersonCreate'

export default StackNavigator({
  PersonCreate: {
    screen: PersonCreate,
    navigationOptions: {
      title: 'Publicar',
    },
  },
})
