import {SCREEN_WIDTH} from '@util/constants.util'
import React from 'react'
import {FlatList, ListRenderItem, Modal} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

import {RankingHooks} from './Ranking.hooks'
import {RankingStyles as UI} from './Ranking.styles'
import Restaurant from './Restaurant.component'

const RankingScreen: React.FC = () => {
  const {keys} = useRanking()
  const {open, onSuccess, close, showPromos} = useQR()

  return (
    <UI.Container>
      <FlatList data={keys} keyExtractor={keyExtractor} renderItem={renderItem} />
      <Modal visible={open} transparent>
        <UI.Dismiss onPress={close}>
          <UI.QRBox>
            {showPromos ? (
              <Restaurant />
            ) : (
              <QRCodeScanner
                cameraStyle={{alignSelf: 'center', width: SCREEN_WIDTH * 0.8, borderRadius: 15, overflow: 'hidden'}}
                onRead={onSuccess}
              />
            )}
          </UI.QRBox>
        </UI.Dismiss>
      </Modal>
    </UI.Container>
  )
}

const keyExtractor = (item: string) => item
const renderItem: ListRenderItem<string> = ({item, index}) => <RankingItem id={item} index={index} />

type Props = {id: string; index: number}
const RankingItem: React.FC<Props> = React.memo(props => {
  const {index, id} = props
  const {point, color, me} = useRankingItem(id, index)
  const {
    user: {email},
    total,
  } = point

  return (
    <UI.Item even={index % 2 === 0} me={me}>
      <UI.Medal color={color} />
      <UI.Title>{email}</UI.Title>
      <UI.Amount>{total}</UI.Amount>
    </UI.Item>
  )
})

const {useRanking, useRankingItem, useQR} = RankingHooks
export default RankingScreen
