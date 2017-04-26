import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
  tabNavigation: {
    backgroundColor: Colors.tabNavigationBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.tabNavigationBorder,
  },
})

export default styles
