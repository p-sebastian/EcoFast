import {StackNavigationOptions} from '@react-navigation/stack'
import {Colors} from '@util/colors.util'
import React from 'react'
import {StyleSheet} from 'react-native'
import Community from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

const {
  headerStyle,
  headerBackTitleStyle,
  headerTitleStyle,
  headerLeftContainerStyle,
} = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.background,
    shadowOffset: {height: 0, width: 0},
  },
  headerTitleStyle: {color: Colors.white},
  headerLeftContainerStyle: {marginLeft: 10},
  headerBackTitleStyle: {
    color: Colors.white,
    fontSize: 14,
  },
})
const Chevron = styled(Icon).attrs({
  name: 'chevron-left',
  size: 40,
  color: Colors.white,
})``
export const defaultStackNavigationOptions: StackNavigationOptions = {
  headerStyle,
  headerTitleStyle,
  headerBackImage: () => <Chevron />,
  headerBackTitleVisible: false,
  headerLeftContainerStyle,
  headerBackTitleStyle,
}

const Close = styled(Community).attrs({
  name: 'close',
  size: 30,
  color: Colors.white,
})``
export const defaultDarkStackNavigationOptions: StackNavigationOptions = {
  headerStyle: {...headerStyle, backgroundColor: ''},
  headerBackImage: () => <Close />,
  headerBackTitleVisible: false,
  headerLeftContainerStyle,
  headerBackTitleStyle,
}
