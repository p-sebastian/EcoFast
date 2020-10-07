import {takeColor} from '@util/recipies.util'
import styled from 'styled-components/native'

export const HomeStyles = {
  Container: styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${takeColor('background')};
  `,

  Text: styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${takeColor('primary')};
  `,
}
