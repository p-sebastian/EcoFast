import React from 'react'
import {FlatList, ListRenderItem} from 'react-native'

import {HomeHooks} from './Home.hooks'
import {HomeStyles as UI} from './Home.styles'
import LocationItem from './LocationItem.component'
import MarkerComponent from './Marker.component'

const HomeScreen: React.FC = () => {
  const {keys, camera} = useHome()

  return (
    <UI.Container>
      <UI.Map camera={camera}>
        {keys.map(id => (
          <MarkerComponent key={id} id={id} />
        ))}
      </UI.Map>
      <FlatList data={keys} keyExtractor={keyExtractor} renderItem={renderItem} />
    </UI.Container>
  )
}

const keyExtractor = (item: string) => item
const renderItem: ListRenderItem<string> = ({item, index}) => <LocationItem id={item} even={index % 2 === 0} />

const {useHome} = HomeHooks
export default HomeScreen
