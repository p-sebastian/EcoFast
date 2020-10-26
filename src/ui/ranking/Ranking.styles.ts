import {extractFn, takeColor} from '@util/recipies.util'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

export const RankingStyles = {
  Container: styled.View`
    flex: 1;
    background-color: ${takeColor('background')};
  `,

  Item: styled.TouchableOpacity`
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    border-left-width: ${extractFn<{even: boolean}>('even', e => (e ? 5 : 0))}px;
    padding-left: ${extractFn<{even: boolean}>('even', e => (e ? 10 : 15))}px;
    border-bottom-width: 2px;
    border-bottom-color: ${takeColor('backgroundLight')};
    border-color: ${takeColor('primary')};
  `,

  Title: styled.Text`
    font-size: 16px;
    margin-left: 10px;
    color: ${takeColor('white')};
    flex: 1;
  `,

  Amount: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${takeColor('primary')};
  `,

  Medal: styled(Icon).attrs({name: 'medal-outline', size: 30})``,
}
