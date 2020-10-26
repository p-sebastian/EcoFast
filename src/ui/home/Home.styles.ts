import {SCREEN_WIDTH} from '@util/constants.util'
import {takeColor} from '@util/recipies.util'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

export const HomeStyles = {
  Container: styled.View`
    flex: 1;
    background-color: ${takeColor('background')};
  `,

  Text: styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${takeColor('primary')};
  `,

  Map: styled(MapView)`
    width: ${SCREEN_WIDTH}px;
    height: 50%;
  `,
}
