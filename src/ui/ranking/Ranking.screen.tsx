import React from 'react'
import {FlatList, ListRenderItem} from 'react-native'

import {RankingHooks} from './Ranking.hooks'
import {RankingStyles as UI} from './Ranking.styles'

const RankingScreen: React.FC = () => {
  const {keys} = useRanking()
  return (
    <UI.Container>
      <FlatList data={keys} keyExtractor={keyExtractor} renderItem={renderItem} />
    </UI.Container>
  )
}

const keyExtractor = (item: string) => item
const renderItem: ListRenderItem<string> = ({item, index}) => <RankingItem id={item} index={index} />

type Props = {id: string; index: number}
const RankingItem: React.FC<Props> = React.memo(props => {
  const {index, id} = props
  const {point, color} = useRankingItem(id, index)
  const {
    user: {email},
    total,
  } = point

  return (
    <UI.Item even={index % 2 === 0}>
      <UI.Medal color={color} />
      <UI.Title>{email}</UI.Title>
      <UI.Amount>{total}</UI.Amount>
    </UI.Item>
  )
})

const {useRanking, useRankingItem} = RankingHooks
export default RankingScreen
