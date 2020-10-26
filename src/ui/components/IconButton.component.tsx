import {Colors} from '@util/colors.util'
import React from 'react'
import {TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'

type Which = 'material' | 'material-community' | 'ionicons' | 'font-awesome'
type Props = {
  uses: Which
  name: string
  onPress?: (...args: any) => void
  color?: string
  size: number
  left?: number
  right?: number
  disabled?: boolean
}
export const IconButton: React.FC<Props> = props => {
  const {uses, left = 0, right = 0, onPress = () => {}, disabled, color = Colors.primary, ..._props} = props
  const Icon = which(uses)

  return (
    <TouchableOpacity
      style={{
        marginLeft: left,
        marginRight: right,
      }}
      onPress={onPress}
      disabled={disabled}>
      <Icon color={disabled ? Colors.backgroundLight : color} {..._props} />
    </TouchableOpacity>
  )
}

const which = (uses: Which) => {
  switch (uses) {
    case 'material':
      return Material
    case 'material-community':
      return MaterialCommunity
    case 'ionicons':
      return Ionicons
    case 'font-awesome':
      return FontAwesome
  }
}
