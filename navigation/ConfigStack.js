import { StackNavigator } from 'react-navigation'

import Config from '../screens/Config'

export default StackNavigator({
  Config: {
    screen: Config,
    navigationOptions: {
      title: 'Configuración',
    },
  },
})
