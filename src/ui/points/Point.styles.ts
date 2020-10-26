import {takeColor} from '@util/recipies.util'
import styled from 'styled-components/native'

export const PointStyles = {
  Container: styled.View`
    flex: 1;
    background-color: ${takeColor('primaryLight')};
  `,
}
