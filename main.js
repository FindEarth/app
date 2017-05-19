import Expo from 'expo'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Router from './navigation/Router'
import cacheAssetsAsync from './utilities/cacheAssetsAsync'
import styles from './styles/AppContainer'

import { Provider } from 'react-redux'
import store from './store'

class AppContainer extends React.Component {

  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync()
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/userM.png'),
          require('./assets/images/userF.png'),
        ],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      })
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({ appIsReady: true })
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('rootNavigation')}
            />
          </NavigationProvider>
          {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
        </View>
      </Provider>
    )
  }
}

Expo.registerRootComponent(AppContainer)
