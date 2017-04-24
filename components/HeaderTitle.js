import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Styles from '../styles/HeaderTitle'
import logo from '../assets/icons/app-icon.png'

function HeaderTitle({title, showLogo}) {
  return (
    <View style={Styles.container}>
      { showLogo && <Image source={logo} style={Styles.logo} /> }
      { title && <Text style={Styles.title}>{title}</Text> }
    </View>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  showLogo: PropTypes.bool,
}

export default HeaderTitle
