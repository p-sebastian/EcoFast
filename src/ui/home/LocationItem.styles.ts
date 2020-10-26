import {Colors} from '@util/colors.util'
import {extractFn, takeColor} from '@util/recipies.util'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native'

export const LocationItemStyles = {
  Container: styled.TouchableOpacity`
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
    color: ${takeColor('white')};
    flex: 1;
  `,

  Arrow: styled(Icon).attrs({name: 'plus', size: 30, color: Colors.primary})``,
}
