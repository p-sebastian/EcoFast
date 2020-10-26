import {useASelector} from '@util/recipies.util'
import React from 'react'
import {Marker} from 'react-native-maps'

const MarkerComponent: React.FC<{id: string}> = ({id}) => {
  const {name, latitude, longitude} = useASelector(state => state.location.locations[id], [id])

  return <Marker coordinate={{longitude, latitude}} title={name} />
}

export default MarkerComponent
