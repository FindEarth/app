import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Styles from '../styles/HeaderTitle'
import logo from '../assets/icons/app-icon-light.png'

function HeaderTitle({title}) {
  return (
    <View style={Styles.container}>
      <Image source={logo} style={Styles.logo} />
      {title && <Text style={Styles.title}>{title}</Text>}
    </View>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
}

export default HeaderTitle
