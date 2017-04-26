import { Image } from 'react-native'
import { Asset, Font } from 'expo'

export default function cacheAssetsAsync({ images = [], fonts = [] }) {
  return Promise.all([...cacheImages(images), ...cacheFonts(fonts)])
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image !== 'string') {
      return Asset.fromModule(image).downloadAsync()
    }
    return Image.prefetch(image)
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}
