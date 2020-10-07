import {extractProp} from '@util/recipies.util'
import styled from 'styled-components/native'

export const CommonStyles = {
  Empty: styled.View<{height?: number; width?: number}>`
    height: ${extractProp('height', 10)}px;
    width: ${extractProp('width', 10)}px;
  `,

  Flex: styled.View`
    flex: 1;
  `
}
