import React from 'react'

import {LocationItemHooks} from './LocationItem.hooks'
import {LocationItemStyles as UI} from './LocationItem.styles'

const LocationItem: React.FC<{id: string; even: boolean}> = ({id, even}) => {
  const {location, onPress, onLongPress} = useLocationItem(id)
  const {name} = location

  return (
    <UI.Container even={even} onPress={onPress} onLongPress={onLongPress}>
      <UI.Title>{name}</UI.Title>
      <UI.Arrow />
    </UI.Container>
  )
}

const {useLocationItem} = LocationItemHooks
export default LocationItem
