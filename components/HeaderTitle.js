import React from 'react'
import {
View,
Text,
Image,
TouchableHighlight,
Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import Styles from '../styles/HeaderTitle'
import logo from '../assets/icons/app-icon.png'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'

function HeaderTitle({title, showLogo, rightIcon}) {
  return (
    <View style={Styles.container}>
      { showLogo && <Image source={logo} style={Styles.logo} /> }
      { title && <Text style={Styles.title}>{title}</Text> }
      { rightIcon &&
        <View style={Styles.rightIcon}>
          <TouchableHighlight
            onPress={() => null}
            underlayColor={Colors.white}
            activeOpacity={0.7}
          >
            <Icon
              name={ Platform.OS === 'ios' ? rightIcon.ios : rightIcon.android}
              size={28}
              color={Colors.tintColor}
              style={Styles.shareHeader}
            />
          </TouchableHighlight>
        </View>
      }
    </View>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  showLogo: PropTypes.bool,
  rightIcon: PropTypes.object,
}

export default HeaderTitle
